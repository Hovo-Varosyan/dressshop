const homeModel = require("../../db/model/homemodel");
class Home {
    static async updateSlide(req, res, next) {
        try {
            console.log(req.files)
            const { fileName } = req
            const { slide } = await homeModel.findOneAndUpdate({}, { $push: { slide: { $each: fileName } } }, { new: true, upsert: true })
            res.json({ message: "Slide updated", slide })
        } catch (err) {
            next(err)
        }
    }
    static async updateTextOne(req, res, next) {
        try {
            const { title, desc } = req.body;
            const updatedHome = await homeModel.findOneAndUpdate({}, {
                "about.textOne.title": title,
                "about.textOne.desc": desc
            }, { new: true, upsert: true });
            res.json({ message: "Text One updated", updatedHome });
        } catch (err) {
            next(err);
        }
    }

}
module.exports = Home;