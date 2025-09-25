
const path = require("path");
const fs = require("fs");

const uploadDir = path.join(__dirname, "..", "media", 'home');
const productDir = path.join(__dirname, "..", "media", 'product');

function checkFolderExists() {
    if (!fs.existsSync(path.join(uploadDir, "images"))) {
        fs.mkdirSync(path.join(uploadDir, "images"), { recursive: true });
    }
    if (!fs.existsSync(path.join(uploadDir, "videos"))) {
        fs.mkdirSync(path.join(uploadDir, "videos"), { recursive: true });
    }
    if (!fs.existsSync(path.join(productDir, "images"))) {
        fs.mkdirSync(path.join(productDir, "images"), { recursive: true });
    }
    if (!fs.existsSync(path.join(productDir, "videos"))) {
        fs.mkdirSync(path.join(productDir, "videos"), { recursive: true });

    }
}
module.exports = checkFolderExists;