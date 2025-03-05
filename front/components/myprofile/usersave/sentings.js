"use client";
import Submit from "../../ui/submit";
import { useState } from "react";
import Personal from "./sentings/personal";
import Contact from "./sentings/contact";
import Addres from "./sentings/addres";
import { Tab, Tabs } from "@mui/material";
import Security from "./sentings/security";
import clsx from "clsx/lite";
import api from "../../../middleware/api";
import { useRouter, useSearchParams } from "next/navigation";
import { useQueryState } from "nuqs";
import parseQueryNumber from "../../../middleware/validate/queryisnumber";

export default function Sntings() {
  const router = useRouter();

  const editMenu = {
    0: (loading) => <Personal loading={loading} />,
    1: (loading) => <Contact loading={loading} />,
    2: (loading) => <Addres loading={loading} />,
    3: (loading) => <Security loading={loading} />,
  };
  const [loading, setLoading] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });
  const [query, setQuery] = useQueryState("item", {
    defaultValue: 0,
    parse: (e) => parseQueryNumber(e, editMenu.length),
    serialize: (value) => value.toString(16),
  });

  function handleDeleteProfile(e) {
    e.preventDefault();
    e.stopPropagation();
    setLoading((prev) => ({ ...prev, 4: true }));

    api
      .delete("/myprofile/deleteprofile")
      .catch((err) => console.log(err))
      .finally(() => setLoading((prev) => ({ ...prev, 4: false })));
  }

  function signOut(e) {
    e.preventDefault();
    setLoading((prev) => ({ ...prev, 5: true }));
    api
      .post("/user/signout")
      .then(() => {
        router.replace("/login");
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading((prev) => ({ ...prev, 5: false })));
  }
  return (
    <section>
      <h4 className="ml-4 my-3">Sentings</h4>
      <section className="sentings capitalize flex gap-4">
        <section className="flex flex-col justify-between gap-2 ">
          <Tabs
            className="menulist flex-shrink-0 text-white"
            orientation="vertical"
            value={query}
            onChange={(_, newValue) => {
              setQuery(newValue);
            }}
          >
            <Tab
              label="Data"
              className={clsx(query === 0 && "menu-active", "text-white")}
            />
            <Tab
              label="contact"
              className={clsx(query === 1 && "menu-active", "text-white")}
            />
            <Tab
              label="addres"
              className={clsx(query === 2 && "menu-active", "text-white")}
            />
            <Tab
              label="security"
              className={clsx(query === 3 && "menu-active", "text-white")}
            />
            <Tab
              onClick={handleDeleteProfile}
              label="delete accaunt"
              className="text-white"
            />
          </Tabs>
          <Submit value="sign out" func={signOut} loading={loading[5]} />
        </section>
        <section className="flex-grow">
          <div className="flex justify-center flex-column gap-2 items-center w-full">
            {editMenu[query](loading[query])}
          </div>
        </section>
      </section>
    </section>
  );
}
