const homeModel = require("../../db/model/homemodel");
class Home {
    static async updateSlide(req, res, next) {
        try {
            const { fileName } = req
            const { slide } = await homeModel.findOneAndUpdate({}, { $push: { slide: { $each: fileName } } }, { new: true, upsert: true })
            res.json({ message: "Slide updated", slide })
        } catch (err) {
            next(err)
        }
    }
    static async updateText(req, res, next) {
        try {
            const { number } = req.params;
            const { title, desc } = req.body;
            const updatedHome = await homeModel.findOneAndUpdate({}, {
                [`about.${number}.title`]: title,
                [`about.${number}.desc`]: desc
            }, { new: true, upsert: true });
            res.json({ message: "Text One updated", updatedHome });
        } catch (err) {
            next(err);
        };
    }

    static async updateTextTwoFile(req, res, next) {
        try {
            const { fileName } = req
            console.log(fileName[0])
            const updatedHome = await homeModel.findOneAndUpdate({}, {
                "about.textTwo.img": fileName[0]
            }, { new: true, upsert: true });
            res.json({ message: "Text Two image updated", updatedHome });
        } catch (err) {
            console.log(err)
            next(err);
        }
    }
}
module.exports = Home;