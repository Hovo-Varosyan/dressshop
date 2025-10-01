const { Schema, model, Types } = require("mongoose");

const priceSchema = new Schema({
    value: { type: Number, required: true },
    promition: { type: Number, required: true },
    total: { type: Number, required: true }

});

const schema = new Schema({
    title: { type: { en: String, hy: String, ru: String, _id: false }, required: true },
    material: { type: { en: String, hy: String, ru: String, _id: false }, required: true },
    category: { type: String, required: true },
    mainFile: { type: { name: String, fileType: String, _id: false } },
    hoverFile: { type: { name: String, fileType: String, _id: false } },
    price: priceSchema,
    date: { type: Date, default: Date.now },
    files: {
        type: [{ name: String, fileType: String, _id: false }],
        required: true,
        validate: {
            validator: function (value) {
                return value.length >= 1;
            },
            message: 'Files array must have at least 1 element'
        }
    },
    description: { type: { en: String, hy: String, ru: String, _id: false }, required: true },
    variant: {
        type: [{
            title: { type: { en: String, hy: String, ru: String, _id: false }, required: true },
            file: { type: { name: String, fileType: String, _id: false }, required: true },
            quantity: { type: Number, required: true },
            size: [String],
            _id: { type: Types.ObjectId, default: new Types.ObjectId, required: true }
        }], required: false, default: undefined
    },
    size: { type: [String], required: true }
});

const productModel = model("product", schema);

module.exports = productModel;
