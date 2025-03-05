const userModel = require("../../db/model/usermodel");
const bcrypt = require("bcrypt");

class User {
    static async getProfileData(req, res, next) {
        try {
            const user = await userModel
                .findById(req.user._id)
                .select("-password -_id -refreshToken -privacyPolicyAccepted");
            if (!user) {
                throw new Error("User not found");
            }
            return res.json(user);
        } catch (err) {
            next(err);
        }
    }
    static async deleteProfile(req, res, next) {
        try {
            console.log(req.user);
            const deleteProfile = await userModel.findByIdAndDelete(req.user._id);
            if (!deleteProfile) {
                throw "Document deleting error";
            }
            [...Object.keys(req.cookies), ...Object.keys(req.signedCookies)].forEach(
                (cookieName) => {
                    res.clearCookie(cookieName);
                }
            );
            return res.json({ deleting: true });
        } catch (err) {
            next(err);
        }
    }
    static async contactChange(req, res, next) {
        try {
            const { email, tel, postCode } = req.body;
            const user = await userModel
                .findByIdAndUpdate(
                    req.user._id,
                    {
                        $set: {
                            "userData.email": email,
                            "userData.tel": tel,
                            "userData.postCode": postCode,
                        },
                    },
                    {
                        new: true,
                    }
                )
                .select("userData.email userData.tel userData.postCode -_id");
            if (!user) {
                throw "User not found";
            }
            return res.json(user);
        } catch (err) {
            next(err);
        }
    }
    static async passwordChange(req, res, next) {
        try {
            const { oldPassword, newPassword } = req.body;
            if (newPassword === oldPassword) {
                throw "new password must be different from old";
            }
            const user = await userModel.findById(req.user._id);
            if (!user) {
                throw new Error("User not found");
            }
            console.log(user.password);
            const isMatch = await bcrypt.compare(oldPassword, user.password);

            if (!isMatch) {
                throw new Error("Old password is incorrect");
            }
            const salt = await bcrypt.genSalt(parseInt(process.env.BC_ROUND));
            const password = await bcrypt.hash(newPassword, salt);
            await userModel.findByIdAndUpdate(req.user._id, {
                $set: { password },
            });
            return res.json({ success: true });
        } catch (err) {
            next(err);
        }
    }
    static async mainDataChange(req, res, next) {
        try {
            const { name, lastName, gender, date } = req.body;
            const user = await userModel
                .findByIdAndUpdate(
                    req.user._id,
                    {
                        $set: {
                            "userData.name": name,
                            "userData.lastName": lastName,
                            "userData.gender": gender,
                            "userData.date": date,
                        },
                    },
                    { new: true }
                )
                .select(
                    "userData.name userData.lastName userData.gender userData.date -_id"
                );
            if (!user) {
                throw "User not found";
            }
            return res.json(user);
        } catch (err) {
            console.log(err);
            next(err);
        }
    }

    static async signOut(req, res, next) {
        try {
            Object.keys(req.signedCookies).forEach((cookie) => {
                res.clearCookie(cookie);
            });
            return res.json({ status: true });
        } catch (err) {
            next(err);
        }
    }
}
module.exports = User;
