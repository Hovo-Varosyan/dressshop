"use client";
import ProductHeader from "./productHeader";

export default function Product({ data }) {
  const { value, promition, total } = data.price

  return (
    <div className="relative bg-gray-900 cursor-pointer  flex flex-col justify-between " onClick={() => { window.open(`/product/${data._id}`, "_blank") }}>
      <ProductHeader data={data} />

      <div className="p-2  w-full">
        <p className="text-lg text-center  ">

          {promition > 0 ? (
            <> <span className=" text-sell-red lora ">
              {total}
            </span><span className="ml-1 text-sm"> &#x058F;</span>
              <sup className="line-through ml-2 lora">
                {value}<b className="text-sm"> &#x058F;</b>
              </sup>
            </>
          ) : <><span className="lora">
            {value}
          </span><span className="text-sm"> &#x058F;</span></>}
        </p>
      </div>
    </div>
  );
}
