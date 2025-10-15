const { mongoose, Schema } = require("mongoose")
const bcrypt = require("bcrypt")
const { ageValidate } = require("../validate/user")
const { v4: uuidv4 } = require('uuid');
const addressSchema = new Schema({
    country: { type: String, trim: true },
    state: { type: String, trim: true },
    city: { type: String, trim: true },
    street: { type: String, trim: true },
    house: { type: String, trim: true },
    zipCode: { type: String, trim: true },
}, { _id: false })
const paymentMethodSchema = new Schema({
    cardNumber: { type: String, required: true },
    expiryDate: { type: Date, required: true },
    cardCVV: { type: String, required: true },
}, { _id: false })

const schema = new Schema({
    userData: {
        name: { type: String, required: true, minLength: 2, maxLength: 60, default: () => `user${uuidv4()}` },
        lastName: { type: String, minLength: 2, maxLength: 60, default: () => `user${uuidv4()}` },
        tel: { type: String, unique: false },
        email: { type: String, unique: true, required: true },
        gender: { type: String, enum: ['male', 'female'], required: true },
        birthDate: {
            type: Date,
        },
        address: addressSchema
    },
    cart: { type: [Schema.Types.ObjectId], ref: "product" },
    favorite: { type: [Schema.Types.ObjectId], ref: "product" },
    password: { type: String, required: true },
    status: { type: String, enum: ['active', 'banned'], default: 'active' },
    paymentMethods: paymentMethodSchema,
    wallet: { type: Number, default: 0, min: 0 },
    privacyPolicyAccepted: {
        date: { type: Date, default: Date.now, required: true },
        accepted: { type: Boolean, default: true, required: true },
    },
    refreshToken: String

}, {
    timestamps: true,
})
schema.pre('save', async function (next) {
    try {
        if (!this.isModified('password')) return next()
        const rounds = parseInt(process.env.BC_ROUND, 10) || 10
        const salt = await bcrypt.genSalt(rounds)
        this.password = await bcrypt.hash(this.password, salt)
        next()
    } catch (err) {
        console.error(err)
        next(err)
    }

})

const userModel = mongoose.model('user', schema)
module.exports = userModel