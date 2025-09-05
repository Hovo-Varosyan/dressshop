export default function formData(item) {
    try {
        const data = new FormData();
        data.append("title", item.title);
        data.append("material", JSON.stringify(item.material.split(",").filter(Boolean).map(item => item.trim())));
        data.append("category", item.category);
        data.append("description", item.description);
        data.append("mainImg", item.mainImg);
        data.append("hoverImg", item.hoverImg);
        data.append("size", JSON.stringify(item.size));
        data.append("price", JSON.stringify(item.price));
        if (item.variant.length) {
            data.append("variant", JSON.stringify(item.variant))
            item.variant.forEach((variant, index) => {
                data.append(`variant[${index}]`, variant.file);
            });
        } else {
            data.append("variant", [])
        }
        item.files.forEach((file, index) => {
            data.append(`files[${index}]`, file);
        });
        return data
    }
    catch (err) {
        throw new Error(err)
    }
}