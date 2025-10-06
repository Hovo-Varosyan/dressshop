const ObjectId = require('mongoose').Types.ObjectId;
const userModel = require("../../db/model/usermodel")

class Product {
  static async addFavorite(req, res, next) {
    const { _id } = req.user
    const { id } = req.body
    try {
      const data = await userModel.findByIdAndUpdate(_id, { $addToSet: { favorite: new ObjectId(id) } })
      if (data) return res.json({ status: true })
    } catch (err) {
      next(err)
    }
  }
  static async removeFavorite(req, res, next) {
    const { _id } = req.user
    const { id: productId } = req.params
    try {
      const data = await userModel.findByIdAndUpdate(_id, { $pull: { favorite: productId } })
      if (data) return res.json({ status: true })
    } catch (err) {
      console.log(err)
      next(err)
    }
  }
  static async getAllProduct(req, res, next) {
    const { _id } = req.user

    try {
      const data = await userModel.findById(_id).populate("favorite", "title price mainFile hoverFile").select("favorite -_id")
      console.log(data)
      if (data) return res.json(data)
    } catch (err) {
      next(err)
    }
  }
  static async addCart(req, res, next) {
    const { _id } = req.user
    const { id } = req.body
    try {
      const data = await userModel.findByIdAndUpdate(_id, { $addToSet: { cart: new ObjectId(id) } })
      console.log(data)
      if (data) return res.json({ status: true })
    } catch (err) {
      next(err)
    }
  }
  static async removeCart(req, res, next) {
    const { _id } = req.user
    const { id } = req.params
    try {
      const data = await userModel.findByIdAndUpdate(_id, { $pull: { cart: id } })
      if (data) return res.json({ status: true })
    } catch (err) {
      console.log(err)
      next(err)
    }
  }
  static async getAllCart(req, res, next) {
    const { _id } = req.user
    try {
      const data = await userModel.findById(_id).populate("cart", "title price mainFile variant size ").select("cart -_id").lean()
      console.log(data)
      if (data) return res.json(data)
    } catch (err) {
      next(err)
    }
  }
}
module.exports = Product