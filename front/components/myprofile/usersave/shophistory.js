import Image from "next/image";
import BuyForm from "../../product/item/buyform";

export default function Card() {
  return [...Array(25)].map((_, i) => {
    return (
      <article className="p-3 flex gap-3" key={i}>
        <figure>
          <Image src={"/t.jpg"} width={150} height={150} alt="product" />
        </figure>
        <div className="flex gap-3 items-center">
          <div className="h-full">
            <h4 className="py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            </h4>
          </div>
          <div>
          </div>
        </div>
      </article>
    );
  });
}
