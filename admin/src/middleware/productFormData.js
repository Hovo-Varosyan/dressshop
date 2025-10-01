export default function formData(item) {
    try {
        const data = new FormData();
        data.append("title", JSON.stringify(item.title));
        data.append("material", JSON.stringify(item.material));
        data.append("category", item.category);
        data.append("description", JSON.stringify(item.description));
        data.append("mainFile", item.mainFile);
        data.append("hoverFile", item.hoverFile);
        data.append("size", JSON.stringify(item.size));
        data.append("price", JSON.stringify(item.price));
        if (item.variant.length) {
            data.append("variant", JSON.stringify(item.variant))
            item.variant.forEach((variant, index) => {
                data.append(`${index}variant`, variant.file[0]);
            });
        }
        item.files.forEach((file, index) => {
            data.append(`files[${index}]`, file);
        });
        return data
    }
    catch (err) {
        throw err
    }
}