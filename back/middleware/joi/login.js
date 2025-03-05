const Joi = require("joi")

function registrationValidte(date) {
    const schema = Joi.object({
        email: Joi.string().min(5).max(254).email().required(),
        password: Joi.string().min(6).max(30).pattern(/^(?=.*[A-Z])[a-zA-Z0-9;\[\]{}=\-_+*\/?\s]*$/).required(),
        gender: Joi.string().min(3).max(6).valid('male', 'female').required(),
        politic: Joi.boolean().valid(true).required()
    })
    const { error, value } = schema.validate(date)
    if (error) throw error;
    return value
}

function loginValidate(data) {
    const schema = Joi.object({
        email: Joi.string().min(5).max(254).email().required(),
        password: Joi.string().min(6).max(30).pattern(/^(?=.*[A-Z])[a-zA-Z0-9;\[\]{}=\-_+*\/?\s]*$/).required(),

    })
    const { error, value } = schema.validate(data)

    if (error) throw error;
    return value
}

module.exports = { registrationValidte, loginValidate }