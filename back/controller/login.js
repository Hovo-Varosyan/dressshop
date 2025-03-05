const userModel = require("../db/model/usermodel");
const { registrationValidte, loginValidate } = require("../middleware/joi/login");
const { genereteToken } = require("../middleware/utils/jwt");
const bcrypt = require("bcrypt")

class Login {

    static registration = async (req, res, next) => {
        let data;
        try {
            const { email, gender, password, politic } = registrationValidte(req.body);

            const user = new userModel({ userData: { email, gender }, password, politic });
            data = await user.save();

            if (!data) {
                throw new Error("document saving error");
            }

            const { _id, status } = data;
            console.log(status)
            await userModel.findByIdAndUpdate({ _id }, { refreshToken: await genereteToken({ _id, status }, "14d"), })


            res.cookie('Y_V', await genereteToken({ _id, status }, "3d"), { httpOnly: true, signed: true, path: '/', maxAge: 1000 * 60 * 60 * 24 * 30 });

            return res.status(200).json({ status: true });

        } catch (err) {

            if (data && data._id) {
                try {
                    await userModel.deleteOne({ _id: data._id });
                } catch (deleteErr) {
                    console.error('Error deleting user:');
                }
            }
            if (err?.code == 11000) {
                err.message = "already exists"
            }
            console.log(err)
            next(err);
        }

    }

    static login = async (req, res, next) => {
        try {
            const { email, password } = loginValidate(req.body)
            const user = await userModel.findOne({ "userData.email": email })
            if (!user) {
                return res.status(401).json({ status: false })
            }
            const { _id, status, password: hash } = user
            const isMatch = await bcrypt.compare(password, hash)
            if (!isMatch) {
                return res.status(401).json({ status: false })
            }
            await userModel.findByIdAndUpdate({ _id }, { refreshToken: await genereteToken({ _id, status }, "14d"), })
            res.cookie('Y_V', await genereteToken({ _id, status }, "3d"), { httpOnly: true, signed: true, path: '/', maxAge: 1000 * 60 * 60 * 24 * 30 });
            return res.status(200).json({ status: true });
        } catch (err) {
            console.log(err)
            next(err)
        }
    }

}



module.exports = Login;
