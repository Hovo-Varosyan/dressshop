const productModel = require("../../db/model//productmodel")

class Product {
    static async add(req, res, next) {

        try {
            const { title, material, category, description, size, price, mainFile, fileData, hoverFile, variant = null } = req.body
            if (fileData.length > 10) {
                fileDelete(fileData.map(file => file.name))
            }
            const newReq = {
                title: JSON.parse(title),
                material: JSON.parse(material),
                category,
                description: JSON.parse(description),
                mainFile: mainFile || fileData[0] || "",
                hoverFile: hoverFile || fileData[1] || "",
                size: JSON.parse(size),
                price: JSON.parse(price),
                files: fileData,
            }
            if (variant) {
                newReq.variant = variant
            }
            console.log(newReq)
            const data = new productModel(newReq)
            await data.save()
            return res.json({ message: "Product added" })
        }
        catch (err) {
            console.log(err)
            next(err)
        }
    }
}
module.exports = Product