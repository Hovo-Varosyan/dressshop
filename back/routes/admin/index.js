const router = require("express").Router()
const product = require("./product.js")
const home = require("./home.js")

router.use("/product", product)
router.use("/home", home)
module.exports = router