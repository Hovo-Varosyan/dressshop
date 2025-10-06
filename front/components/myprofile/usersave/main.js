"use client";
import { Tab, Tabs } from "@mui/material";
import "../../../assets/style/product.css";
import { useQueryState } from "nuqs";
import { useRouter } from "next/navigation";
import parseQueryNumber from "../../../middleware/validate/queryisnumber";
import dynamic from "next/dynamic";

const ShopHistory = dynamic(() => import("./shophistory"));
const Favorite = dynamic(() => import("./favorite"));
const Settings = dynamic(() => import("./sentings"));
const Cart = dynamic(() => import("./cart"));

const menuValue = {
  0: <ShopHistory />,
  1: <Cart />,
  2: <Favorite />,
  3: <Settings />,
};


export default function UserSave() {
    const router = useRouter();
    const [query] = useQueryState("menu", {
        defaultValue: 0,
        parse: e => parseQueryNumber(e, menuValue.length),
    });

    function handleChanges(_, newValue) {
        router.replace(`?menu=${newValue.toString(16)}`);
    }
    return (
        <section>
            <div className="py-3 ">
                <hr />
                <Tabs value={query} onChange={handleChanges}>
                    <Tab
                        label="history"
                        className="border-r-2 text-white border-gray-400 border-solid"
                    />
                    <Tab
                        label="karzina"
                        className="border-r-2 text-white border-gray-400 border-solid"
                    />
                    <Tab
                        label="v izbrannom"
                        className="border-r-2 text-white border-gray-400 border-solid"
                    />
                    <Tab label="sentings" className=" text-white " />
                </Tabs>
                <hr />
            </div>
            <div>{menuValue[query]}</div>
        </section>
    );
}
