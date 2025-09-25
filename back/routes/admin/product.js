const router = require("express").Router()
const multer = require("multer");
const fs = require("fs")
const path = require("path")
const Product = require("../../controller/admin/product")
const { v4: uuid } = require("uuid");
const multerTools = require("../../middleware/utils/multerTools");

const uploadDir = path.join(__dirname, "..", "..", "media", 'product');


const storage = multer.diskStorage({

    destination: (_, file, cb) => {
        try {
            const filePath = path.join(uploadDir, file.mimetype.startsWith("image") ? "images" : "videos")
            cb(null, filePath);

        } catch (err) {
            cb(err)
        }
    },
    filename: (req, file, cb) => {
        try {

            const { fieldname, mimetype, originalname } = file
            const ext = path.extname(originalname);
            const name = `${uuid()}-${Date.now()}${ext}`
            if (fieldname.startsWith("files")) {
                if (originalname === req.body.mainImg) {
                    req.body.mainImg = name
                }
                else if (originalname === req.body.hoverImg) {
                    req.body.hoverImg = name
                }
            } else if (req.body?.variant && fieldname.endsWith("variant")) {
                if (typeof req.body.variant === "string") {
                    req.body.variant = JSON.parse(req.body.variant)
                }
                req.body.variant[parseInt(fieldname)].file = { name, fileType: mimetype.split("/")[0] }
            }

            cb(null, name);
        } catch (err) {
            console.log(err)
            cb(err)
        }

    }
});

const upload = multer({
    storage,
    fileFilter: multerTools.fileFilter,
})
router.post("/add", upload.any(), Product.add)

module.exports = router