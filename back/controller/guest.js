const productModel = require("../db/model/productmodel")
const createError = require("http-errors")
const homeModel = require("../db/model/homemodel")

class Guest {
    static async getCategory(req, res, next) {
        try {
            const data = await productModel.find().select("title  mainFile hoverFile price")
            if (!data.length) {
                next(new createError.NotFound())
            }
            return res.json(data)
        } catch (err) {
            console.log(err)
            next(err)
        }

    }
    static async getProduct(req, res, next) {
        try {
            const data = await productModel.findById(req.params.id)
            if (!data) {
                next(new createError.NotFound())
                return
            }
            return res.json(data)
        } catch (err) {
            next(err)
        }

    }
    static async getHomeData(req, res, next) {
        try {
            const data = await homeModel.findOne()
            res.json(data)
        } catch (err) {
            next(err)
        }
    }
}
module.exports = Guest