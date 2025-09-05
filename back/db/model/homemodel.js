const { Schema, model } = require("mongoose");

const homeSchema = new Schema({
    slide: {
        type: [String],
    },
    about: {
        // пустая строка по умолчанию

        textOne: {
            img: { type: String, default: "" },
            title: {
                ru: { type: String, default: "" },
                en: { type: String, default: "" },
                hy: { type: String, default: "" }
            },
            desc: {
                ru: { type: String, default: "" },
                en: { type: String, default: "" },
                hy: { type: String, default: "" }
            }
        },

        textTwo: {
            title: {
                ru: { type: String, default: "" },
                en: { type: String, default: "" },
                hy: { type: String, default: "" }
            },
            desc: {
                ru: { type: String, default: "" },
                en: { type: String, default: "" },
                hy: { type: String, default: "" }
            }
        }
    }
});
const homeModel = model("home", homeSchema);
module.exports = homeModel;