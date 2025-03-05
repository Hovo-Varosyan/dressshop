"use client";
import Card from "./shophistory";
import Favorite from "./favorite";
import Sntings from "./sentings";
import { Tab, Tabs } from "@mui/material";
import "../../../assets/style/product.css";
import Order from "./orders";
import { useQueryState } from "nuqs";
import { useRouter } from "next/navigation";
import parseQueryNumber from "../../../middleware/validate/queryisnumber";

const menuValue = {
    0: () => <Card />,
    1: () => <Order />,
    2: () => <Favorite />,
    3: () => <Sntings />,
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
                        label="zakazi"
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
            <div>{menuValue[query]()}</div>
        </section>
    );
}
