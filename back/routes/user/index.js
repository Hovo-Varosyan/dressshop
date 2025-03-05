const router = require("express").Router()
const product = require("./product.js")
const user = require("./user.js")

router.use("/product", product)
router.use("/", user)
module.exports = router