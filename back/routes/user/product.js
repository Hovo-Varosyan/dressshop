const router = require("express").Router()
const Product = require("../../controller/user/product");
router.route("/favorite")
    .get(Product.getAllProduct)
    .post(Product.addFavorite);
router.delete("/favorite/:id", Product.removeFavorite)
router.route("/cart") 
.post(Product.addCart)
.get(Product.getAllCart);
router.delete("/cart/:id", Product.removeCart)

module.exports = router