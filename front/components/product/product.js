"use client";
import ProductHeader from "./productHeader";
import { useRouter } from "next/navigation";

export default function Product({ data }) {
  const router = useRouter()
  const { value, promition, total } = data.price
  return (
    <div className="relative bg-black cursor-pointer  flex flex-col justify-between " onClick={() => { router.push(`/product/${data._id}`) }}>
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
