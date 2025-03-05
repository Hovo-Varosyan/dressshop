import Link from "next/link";
import "../../assets/style/mainmenu.css";
import { Orbitron } from "next/font/google";
import clsx from "clsx/lite";
import { Facebook, Instagram } from "@mui/icons-material";
import { cookies } from "next/headers";
import ShoppingBag from "../ui/shoppingbag";
import ProfileBtn from "../ui/profileBtn";
const orbitron = Orbitron({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
export default async function Mainmenu() {
  return (
    <header className="w-full header relative">
      <section className="w-full flex justify-between items-center text-center">
        <div className="mx-4 flex gap-3">
          <Link title="facebook" href="#">
            <Facebook />
          </Link>
          <Link title="instagram" href="#">
            <Instagram />
          </Link>
        </div>
        <h2 className={clsx(orbitron.className, "m-6 flex-grow !text-6xl")}>
          LALAMBADA
        </h2>
        <div className="flex gap-3 items-end">
          <ShoppingBag isAuth={cookies().get("Y_V") ? true : false} />
          <ProfileBtn isAuth={cookies().get("Y_V") ? true : false} />
        </div>

      </section>
      <section
        className={`flex items-center w-10/13 px-3.5 m-auto capitalize text-xl p-2 my-container  justify-center `}
      >
        <nav className="w-full">
          <ul className="flex justify-around  my-2 ">
            <li className={"hover:scale-110"}>
              <Link href="/">home</Link>
            </li>
            <li className={"block cursor-pointer product-list"}>
              <p>product</p>
              <div className="absolute z-50 pt-7 min-w-full  active left-0">
                <ul className=" mx-auto bg-black flex min-w-full flex-wrap justify-center  p-5 text-base menu-header  ">
                  <li>
                    <Link href="/category/shoes">Վերարկուներ</Link>
                  </li>
                  <li>
                    <Link href="/category/shoes"> Գլխարկներ</Link>
                  </li>
                  <li>
                    <Link href="/category/shoes"> Զգեստներ</Link>
                  </li>
                  <li>
                    <Link href="/category/shoes">հարսանյաց զգեստներ</Link>
                  </li>
                  <li>
                    <Link href="/category/shoes">տաբատներ</Link>
                  </li>
                  <li>
                    <Link href="/category/shoes">սվիտրներ</Link>
                  </li>
                  <li>
                    <Link href="/category/shoes">պայուսակներ</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className={"hover:scale-110"}>
              <Link href="/delivery">delivery</Link>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}
