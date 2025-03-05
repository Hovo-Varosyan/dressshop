"use client";
import Link from "next/link";
import clsx from "clsx/lite";
import "../../../assets/style/productcontainer.css";
import ProductHeader from "../../product/productHeader";
import productData from "../../../assets/json/product.json";
import Cart from "../../../middleware/oop/cart";
import OrderCart from "./cart";
import Favorite from "../../product/favorite";

export default function Order({ data }) {
  return (
    <div className="product p-3 pb-0">
      {productData.map((data) => {
        const cart = new Cart(1, data.price, data.discount, data.maxLimit);
        return (
          <div
            className=" relative flex gap-2 flex-col items-start product-container"
            key={data.id}
          >
            <ProductHeader data={data} />

            <div className="p-2">
              <Link href={"/product/456"}>{data.title}</Link>
              <p className="text-lg">
                <span className={clsx(data.discount > 0 && "line-through")}>
                  {data.price}$
                </span>
                {data.discount > 0 && (
                  <b className="ml-2 text-sell-red">
                    {cart.getPrice * cart.getCount}$
                  </b>
                )}
              </p>
            </div>
            <OrderCart Cart={cart} />
          </div>
        );
      })}
    </div>
  );
}
