const router = require("express").Router();
const multer = require("multer");
const Home = require("../../controller/admin/home");
const path = require("path");
const uploadDir = path.join(__dirname, "..", "..", "media", "home");
const { v4: uuid } = require("uuid");
const multerTools = require("../../middleware/utils/multerTools");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    try {
      
      cb(
        null, path.join(
          uploadDir,
          file.mimetype.startsWith("image") ? "images" : "videos"
        )
      );
    } catch (err) {
      cb(err);
    }
  },
  filename: multerTools.fileNames,
});
const upload = multer({
  storage,
  fileFilter: multerTools.fileFilter,
});

router.post("/slide", upload.any(), Home.updateSlide);
router.post("/text/:number", Home.updateText);
router.post("/texttwofile", upload.single("file"), Home.updateTextTwoFile);

module.exports = router;
