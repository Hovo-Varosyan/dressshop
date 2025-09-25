const path = require("path")
const { v4: uuid } = require("uuid");
class multerTools {
    static fileNames(req, file, cb) {
        if (!req.fileName) {
            req.fileName = []
        }
        try {
            const { mimetype, originalname } = file;
            const ext = path.extname(originalname);
            const name = `${uuid()}-${Date.now()}${ext}`;
            req.fileName.push({ name, fsType: mimetype.split("/").shift() });
            cb(null, name)
        } catch (err) {
            cb(err)
        }
    }
    static fileFilter(_, file, cb) {
        try {
            if (file.mimetype.includes("image") || file.mimetype.includes("video")) {
                cb(null, true)
            }
            else {
                cb(new Error("Only images and videos are allowed"), false)
            }
        } catch (err) {
            cb(err)
        }
    }
}
module.exports = multerTools