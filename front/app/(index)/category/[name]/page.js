import "./style.css";
import Filter from "../../../../components/category/filter";
import Product from "../../../../components/product/product";
import "../../../../assets/style/product.css"
import { notFound } from "next/navigation";
import api from "../../../../middleware/api";

export default async function page() {
  try {
    const res = await api.get("/category/dress")

    return (
      <div className="flex p-2 pt-8 bg-lite-black gap-3">
        <Filter />
        <section className="product  gap-7 grow">
          {res.data.map((e) => {
            return <Product data={e} key={e._id} />;
          })}
        </section>
      </div>
    )
  } catch (err) {
    notFound(err)
  }
}
