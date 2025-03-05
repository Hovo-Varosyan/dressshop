const router = require("express").Router()
const Product = require("../../controller/user/product");

router.post("/favorite", Product.addFavorite)
router.delete("/favorite/:id", Product.removeFavorite)


module.exports = router