"use client"
import Image from "next/image";
import clsx from "clsx/lite";
import { Button } from "@mui/material";
import Size from "../../size";
import Favorite from "../favorite";
import DOMPurify from "dompurify";
import { useState } from "react";
import CartButton from "./cartButton";
import Order from "../../order/order";

export default function ItemData({ data }) {
  const { material,
    title,
    description,
    price,
    _id,
    variant,
    size: productSize } = data
  const [size, setSize] = useState(productSize || variant[0].size);
  const [open, setOpen] = useState(false);
  const { promition, total, value } = price;
  const sanitilizeDesc = DOMPurify.sanitize(description.en);
      console.log("itemdata")
  return (
    <section className="w-[50%]">
      <div>
        <div>
          <h2 className="text-3xl pb-3">{title.en}</h2>
          <div
            className="py-5"
            dangerouslySetInnerHTML={{ __html: sanitilizeDesc }}
          ></div>
          <div className="material flex flex-wrap gap-3">
            <b className="pr-1 content-center text-gray-300">Material:</b>
            {material.en.split(",").map((e) => (
              <span key={e} className="p-2 bg-white text-black">
                {e}
              </span>
            ))}
          </div>
          <div className="flex gap-3 flex-wrap mt-8">
            {variant?.map(({ file, title, size }) => (
              <div
                className="p-2 cursor-pointer border-[3px] border-[gray] w-[100px]"
                onClick={() => setSize(size)}
                key={title.en}
              >
                <Image
                  alt="product variant"
                  width={100}
                  height={150}
                  title={title.en}
                  src={"http://localhost:4000" + "/productImg/" + file.name}
                />
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Size data={size} />
          </div>
          <p className="lora mt-4 text-xl">
            <b className="pr-1">Price:</b>
            <span className={clsx(promition && "text-sell-red")}>
              {total} &#x058F;
            </span>
            {!!promition && (
              <>
                <sup className="ml-1 line-through">{value} &#x058F;</sup>{" "}
                <span className="ml-3 text-sell-red">-{promition}%</span>
              </>
            )}
          </p>
        </div>
        <div className=" mt-4 flex items-center   flex-col gap-3">
          <Button className="!bg-btn-red w-2/4 !text-white" onClick={()=>setOpen(true)}>Buy</Button>
            <Order open={open} onClose={()=>setOpen(false)} total={total}/>
          <div className="flex gap-3 item--buttons justify-between w-2/4">
            <CartButton id={_id}/>
              <Favorite id={_id} />
          </div>
        </div>
      </div>
    </section>
  );
}
