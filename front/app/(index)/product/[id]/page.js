import "./style.css";
import Item from "../../../../components/product/item/item";
import api from "../../../../middleware/api"
import { notFound } from "next/navigation";

export const metadata = {
  title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                 excepturi eum ratione fugiat, in cumque.`,
};

export default async function page({ params }) {
  try {
    const {data} = await api.get(`/product/${params.id}`)

    return (
      <div className={`p-4 mt-5 product`}>
        <Item data={data} />
        <div className="py-4">
          {/* <ProductSlide /> */}
        </div>
      </div>
    );
  } catch (err) {
    if (err.status === 404) {
      notFound()
    }
    console.log(err)
  }

}
