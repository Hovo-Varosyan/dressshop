const { mongoose, Schema } = require("mongoose")
const bcrypt = require("bcrypt")
const { ageValidate } = require("../validate/user")
const { v4: uuidv4 } = require('uuid');

const schema = new Schema({
    userData: {
        name: { type: String, required: true, minLength: 2, maxLength: 60, default: () => `user${uuidv4()}` },
        lastName: { type: String, minLength: 2, maxLength: 60, default: () => `user${uuidv4()}` },
        tel: { type: String },
        email: { type: String, unique: true, required: true },
        city: String,
        street: String,
        house: String,
        postCode: Number,
        gender: { type: String, enum: ['male', 'female'], required: true },
        date: {
            type: Date,
            // validate: { validator: ageValidate, message: "AGE VALIDATION ERROR" }
        }
    },
    order: [String],
    favorite: [String],
    registrationDate: { type: Date, default: Date.now },
    wallet: Number,
    password: { type: String, required: true },
    status: { type: String, enum: ['active', 'banned'], default: 'active' },
    paymentMethods: [
        {
            cardNumber: { type: String },
            expiryDate: { type: Date },
            cardHolderName: { type: String },
            isDefault: { type: Boolean, default: false },
        }
    ],
    privacyPolicyAccepted: {
        date: { type: Date, default: Date.now, required: true },
        accepted: { type: Boolean, default: true, required: true },
    },
    refreshToken: String

})
schema.pre('save', async function (next) {
    try {
        if (this.isModified('password')) {
            console.log(process.env.BC_ROUND)
            const salt = await bcrypt.genSalt(parseInt(process.env.BC_ROUND))
            this.password = await bcrypt.hash(this.password, salt)
            next()
        }
    } catch (err) {
        console.log(err)
    }
    finally {
        return next()

    }
})

const userModel = mongoose.model('user', schema)
module.exports = userModel