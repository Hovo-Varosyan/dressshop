const router = require("express").Router()
const multer = require("multer");
const fs = require("fs")
const path = require("path")
const Product=require("../../controller/admin/product")
const { v4: uuid } = require("uuid");

const uploadDir = path.join(__dirname, "..", "..", "media", 'product');

if (!fs.existsSync(path.join(uploadDir, "images"))) {
    fs.mkdirSync(path.join(uploadDir, "images"), { recursive: true });
}
if (!fs.existsSync(path.join(uploadDir, "videos"))) {
    fs.mkdirSync(path.join(uploadDir, "videos"), { recursive: true });

}

const storage = multer.diskStorage({

    destination: (req, file, cb) => {
        req.body
        try {
            cb(null, path.join(uploadDir, file.mimetype.startsWith("image") ? "images" : "videos"));

        } catch (err) {
            cb(err)
        }
    },
    filename: (req, file, cb) => {
        try {
            if (!req.body?.files) {
                req.body.files = []
                if (req.body.variant.length) {
                    req.body.variant = JSON.parse(req.body.variant)
                }
            }

            const { fieldname, mimetype } = file

            const name = mimetype.split("/").shift() + uuid() + "." + Date.now() + "." + file.originalname.split(".").pop()
            if (fieldname.startsWith("files")) {
                req.body.files[parseInt(fieldname.at(-2))] = name
                if (file.originalname === req.body.mainImg) {
                    req.body.mainImg = name
                }
                else if (file.originalname === req.body.hoverImg) {
                    req.body.hoverImg = name
                }
            } else if (fieldname.startsWith("variant")) {
                req.body.variant[parseInt(fieldname.at(-2))].file = name
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
    fileFilter: (req, file, cb) => {
        if (file.mimetype.includes("image") || file.mimetype.includes("video")) {
            cb(null, true)
        }
        else {
            cb(new Error("Only images and videos are allowed"), false)
        }

    },
    limits: {
        fileSize: (req, file, cb) => {
            if (file.mimetype.includes("image")) {
                cb(null, 10 * 1024 * 1024)
            } else {
                cb(null, Infinity)
            }
        }
    }
})
router.post("/add", upload.any(), Product.add)

module.exports = router