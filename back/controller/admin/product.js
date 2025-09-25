const productModel = require("../../db/model//productmodel")

class Product {
    static async add(req, res, next) {

        try {
            const { title, material, category, description, size, price, mainImg, hoverImg, variant = null } = req.body
            const { files } = req
            if (files.filter(file => file.fieldname.startsWith("files")).length > 10) {
                fileDelete(files.map(file => file.filename))
            }
            const newReq = {
                title: JSON.parse(title),
                material: JSON.parse(material),
                category,
                description: JSON.parse(description),
                mainImg: mainImg || files[0].name || "",
                hoverImg: hoverImg || files[1].name || "",
                size: JSON.parse(size),
                price: JSON.parse(price),
                files: files.map(file => ({ name: file.filename, fileType: file.mimetype.split("/")[0] }))
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