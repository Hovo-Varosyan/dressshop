const router = require("express").Router()
const product = require("./product.js")
const home = require("./home.js")
const analitics = require("./analitics.js")

router.use("/analitics", analitics)
router.use("/product", product)
router.use("/home", home)

module.exports = router