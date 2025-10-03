import "./style.css";
import api from "../../../../middleware/api"
import { notFound } from "next/navigation";
import Slide from "../../../../components/product/item/slide";
import ItemData from "../../../../components/product/item/itemdata";

export const metadata = {
  title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                 excepturi eum ratione fugiat, in cumque.`,
};

export default async function page({ params }) {
  try {
    const { data } = await api.get(`/product/${params.id}`)
    if (data.variant) { data.size = null }
    return (
      <div className={`p-4 mt-5 product`}>
        <div className="flex gap-12 ">
          <Slide mainFile={data.mainFile} files={data.files} />
          <ItemData data={data} />
        </div >
      </div>
    );
  } catch (err) {
    if (err.status === 404) {
      notFound()
    }
    console.log(err)
  }

}
