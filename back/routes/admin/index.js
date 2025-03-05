const router = require("express").Router()
const product= require("./product.js")

router.use("/product", product)

module.exports=router