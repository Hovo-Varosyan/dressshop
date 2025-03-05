const { Schema, model, Types } = require("mongoose");

const priceSchema = new Schema({
    value: { type: Number, required: true },
    promition: { type: Number, required: true },
    total: { type: Number, required: true }

});

const schema = new Schema({
    title: { type: String, required: true },
    material: { type: [String], required: true },
    category: { type: String, required: true },
    mainImg: { type: String, default: "" },
    hoverImg: { type: String, default: "" },
    price: priceSchema,
    date: { type: Date, default: Date.now },
    files: {
        type: [String],
        required: true,
        validate: {
            validator: function (value) {
                return value.length >= 1;
            },
            message: 'Files array must have at least 1 element'
        }
    },
    description: { type: String, required: true },
    variant: [{
        title: { type: String, required: true },
        file: { type: String, required: true },
        quantity: { type: Number, required: true },
        size: [String],
        _id: { type: Types.ObjectId, default: new Types.ObjectId, required: true }
    }],
    size: { type: [String], required: true }
});

const productModel = model("product", schema);

module.exports = productModel;
