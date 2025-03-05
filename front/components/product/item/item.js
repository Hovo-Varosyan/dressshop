"use client";
import Slide from "./slide";
import ItemData from "./itemdata";
export default function Item({ data }) {
  let {
    material,
    title,
    mainImg,
    description,
    price,
    files,
    size,
    variant,
    _id,
  } = data;
  if (variant.length) {
    size = null;
  }
  return (
    <div className="flex gap-12 ">
      <Slide mainImg={mainImg} files={ files } />
      <ItemData title={title} _id={_id} variant={variant} price={price} descript={description} productSize={size} material={material}/>
    </div >
  );
}
