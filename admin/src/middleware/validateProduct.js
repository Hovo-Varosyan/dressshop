export default function validateProduct(product) {
    if (Object.values(product.title).some(val => !val.trim())) {
        throw new Error("Title cannot be empty.");
    }
    else if (Object.values(product.material).some(val => !val.trim())) {
        throw new Error("Material cannot be empty.");
    }
    else if (!product.category) {
        throw new Error("Category is required.");
    }
    else if (Object.values(product.description).some(val => !val.trim() || val === '<p><br></p>')
    ) {
        throw new Error("Description cannot be empty.");
    }
    else if (!product.size.length) {
        throw new Error("Size must be specified.");
    }
    else if (!product.files.length) {
        throw new Error("At least one file must be uploaded.");
    }
    else if (product.price.value <= 0) {
        throw new Error("Price must be greater than 0.");
    } else if (product.variant.length === 1) {
        throw new Error(
            "The number of product variants should be at least 2, or there should be none.",
        );
    }
}
