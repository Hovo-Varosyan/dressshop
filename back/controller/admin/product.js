const productModel=require("../../db/model//productmodel")

class Product {
    static async add(req, res, next) {
        try {
            const { title, material, category, description, files, size, price, mainImg, hoverImg } = req.body

            if (files.length > 10) {
                fileDelete(files)
                if (req.body.variant.length) {
                    const variantFile = req.body.variant.map(item => {
                        return item.file
                    })
                    fileDelete(variantFile)
                }
                throw new Error("files max limit 10")
            }
            const newReq = {
                title,
                material: JSON.parse(material),
                category,
                description,
                mainImg: mainImg || files[0] || "",
                hoverImg: hoverImg || files[1] || "",
                size: JSON.parse(size),
                price: JSON.parse(price),
                files,
            }
            if (req.body?.variant) {
                newReq.variant = req.body.variant
            }
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
module.exports=Product