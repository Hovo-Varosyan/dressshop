const { Schema, model } = require("mongoose");

const homeSchema = new Schema({
    slide: {
        type: [{
                                _id: false,
            name: { type: String, default: "" },
            fsType: { type: String, default: "" }
        }],
    },
    about: {
        textOne: {
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
            img: {
                type: {
                    _id: false,
                    name: { type: String, default: "" },
                    fsType: { type: String, default: "" }
                }
            },
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

        textThre: {
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