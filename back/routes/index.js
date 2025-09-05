const router = require("express").Router()
const loginRouter = require("./login");
const veryfication = require("../middleware/veryfication/veryfication")
const admin = require("./admin/index")
const user = require("./user/index")
const Guest=require("../controller/guest")

router.use(loginRouter);
router.get("/product/:id", Guest.getProduct)
router.get("/category/:name", Guest.getCategory)
router.use("/user", veryfication, user)
router.use("/admin", admin)
router.get("/", Guest.getHomeData)
module.exports = router;
