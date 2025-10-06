"use client"

import Link from "next/link";
import "../../assets/style/mainmenu.css";
import { Orbitron } from "next/font/google";
import clsx from "clsx/lite";
import ShoppingBag from "../ui/shoppingbag";
import ProfileBtn from "../ui/profileBtn";
import { useState } from "react";

const orbitron = Orbitron({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
export default function Mainmenu() {
  const [open, setOpen] = useState(false);
  const [listOpen, setListOpen] = useState(false);
  return (
    <header className="w-full header z-10 top-0 relative">
      <section className="w-full flex justify-between items-center text-center">

        <h2 className={clsx(orbitron.className, "m-3 !text-3xl sm:m-6 flex-grow sm:!text-6xl ")}>
          LALAMBADA
        </h2>
        <div className="flex gap-3 items-end ">
          <div className="hidden md:inline"><ProfileBtn /></div>
          <button
            className=" flex md:hidden mr-4 flex-col gap-2 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
          </button>
        </div>

      </section>
      <section
        className={clsx(open ? 'block ' : "hidden", `items-center md:flex  px-3.5  capitalize text-xl p-2 my-container  justify-center `)}
      >
        <nav className="w-full">
          <ul className="md:flex px-4 md:px-0 block justify-around  my-2 ">
            <li className={"hover:scale-110"}>
              <Link href="/">home</Link>
            </li>
            <li className={"block cursor-pointer product-list group"} onClick={() => setListOpen(!listOpen)} onMouseLeave={() => setListOpen(false)}>
              <p>product</p>
              <div className={clsx(listOpen && "!block", "md:absolute md:z-50 md:pt-7 min-w-full  group-hover:md:block hidden  md:left-0")}>
                <ul className=" block md:flex  flex-wrap justify-center  p-5 text-base menu-header  ">
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
            <li className={"md:hidden hover:scale-110"}>
              <div className="flex align-bottom"><span className="mt-[5px]">My Profile</span><ProfileBtn /></div>

            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}
