
import Product from "../../product/product";
import productData from "../../../assets/json/product.json"

export default function Favorite() {

    return <div className="product p-3">


        {productData.map((e) => {
            return <Product data={e} key={e.id} />;
        })}

    </div>

}

