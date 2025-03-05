const path = require("path")
const fs = require("fs").promises

async function fileDelete(files, folder = "product") {

    for (const item of files) {
        const filePath = path.join(item.startWith("image") ? "image" : "video/", item)
        await fs.unlink(path.join("..", "..", "media", folder, folder == "product" ? filePath : item))
    }
}
module.exports = fileDelete

