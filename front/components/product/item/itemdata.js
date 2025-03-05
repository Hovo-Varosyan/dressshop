import Image from "next/image";
import clsx from "clsx/lite";
import { Button } from "@mui/material";
import Size from "../../size";
import Favorite from "../favorite";
import DOMPurify from "dompurify";
import { useState } from "react";

export default function ItemData({
  material,
  title,
  descript,
  price,
  _id,
  variant,
  productSize
}) {
  const [size, setSize] = useState(productSize || variant[0].size);
  const { promition, total, value } = price;
  const description = DOMPurify.sanitize(descript);


  return (
    <section className="w-[50%]">
      <div>
        <div>
          <h2 className="text-3xl pb-3">{title}</h2>
          <div
            className="py-5"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
          <div className="material flex flex-wrap gap-3">
            <b className="pr-1 content-center text-gray-300">Material:</b>
            {material.map((e) => (
              <span key={e} className="p-2 bg-white text-black">
                {e}
              </span>
            ))}
          </div>
          <div className="flex gap-3 flex-wrap mt-8">
            {variant.map(({ file, title, size }) => (
              <div
                className="p-2 cursor-pointer border-[3px] border-[gray] w-[100px]"
                onClick={() => setSize(size)}
                key={title}
              >
                <Image
                  alt="product variant"
                  width={100}
                  height={150}
                  title={title}
                  src={"http://localhost:4000" + "/productImg/" + file}
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
            {promition && (
              <>
                {" "}
                <sup className="ml-1 line-through">{value} &#x058F;</sup>{" "}
                <span className="ml-3 text-sell-red">-{promition}%</span>
              </>
            )}
          </p>
        </div>
        <div className=" mt-4 flex items-center   flex-col gap-3">
          <Button className="!bg-btn-red w-2/4 !text-white">Buy</Button>
          <div className="flex gap-3 w-2/4">
            <Button className="!bg-btn-red flex-grow w-2/4 !text-white">
              Add to card
            </Button>
            <div className="item--favorite">
              <Favorite id={_id} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
