const router = require("express").Router();
const multer = require("multer");
const Home = require("../../controller/admin/home");
const path = require("path");
const uploadDir = path.join(__dirname, "..", "..", "media", 'home');
const fs = require("fs");
const { v4: uuid } = require("uuid");

if (!fs.existsSync(path.join(uploadDir, "images"))) {
    fs.mkdirSync(path.join(uploadDir, "images"), { recursive: true });
}
if (!fs.existsSync(path.join(uploadDir, "videos"))) {
    fs.mkdirSync(path.join(uploadDir, "videos"), { recursive: true });

}
const storage = multer.diskStorage({

    destination: (req, file, cb) => {

        console.log(file)
        try {
            cb(null, path.join(uploadDir, file.mimetype.startsWith("image") ? "images" : "videos"));

        } catch (err) {
            cb(err)
        }
    },
    filename: (req, file, cb) => {
        if (!req.fileName) {
            req.fileName = []
        }
        try {

            const { mimetype, originalname } = file;
            const ext = path.extname(originalname) || `.${originalname.split(".").pop()}`;
            const name = `${mimetype.split("/").shift()}-${uuid()}-${Date.now()}${ext}`;
            req.fileName.push(name);
            cb(null, name);
        } catch (err) {
            console.log(err);
            cb(err);
        }
    }
});
const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        console.log(file)
        if (file.mimetype.includes("image") || file.mimetype.includes("video")) {
            cb(null, true)
        }
        else {
            cb(new Error("Only images and videos are allowed"), false)
        }

    },
})

router.post("/slide", upload.any(), Home.updateSlide)
module.exports = router;