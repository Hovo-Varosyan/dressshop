"use client";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import React, { useEffect, useState } from "react";
import { letterFall } from "../../assets/animation/animatio";
import Weblogin from "./weblogin";
import InputComponent from "./input";
import api from "../../middleware/api";
import { useRouter } from "next/navigation";
import { useChange } from "../../middleware/hooks";
import Submit from "../ui/submit";

export default function Registration({ setReg }) {
  const [politic, setPolitic] = useState (false);
  const [error, setError] = useState (false);
  const { data, setData } = useChange ({
    email: "",
    password: "",
    gender: "",
  });
  const [loading, setLoading] = useState (false);
  const router = useRouter();
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    threshold: 1,
  });
  useEffect(() => {
    if (inView) {
      const size = entry?.boundingClientRect?.height || 100;
      letterFall(size);
    }
  }, [inView]);
  function handleSubmit(e) {
    e.preventDefault();
    const { password, email, gender } = data;

    if (!password || !email || !gender || !politic) return setError(true);
    if (error) setError(false);

    setLoading(true);

    api
      .post("/registration", { ...data, politic })
      .then((req) => router.replace("/myprofile"))
      .catch((err) => {
        if (err.response?.data?.error == "already exists") {
          setError("*Error email is already exists");
        } else if (err.respons?.data.error == "validation") {
          setError("*Error data validation error");
        } else {
          setError("Error try again later");
        }
      })
      .finally(() => setLoading(false));
  }
  return (
    <div className=" flex flex-col justify-between login-page bg-white h-4/6 p-3">
      <div>
        <h1 className="relative text-4xl text-center overflow-hidden" ref={ref}>
          {"WELCOME".split("").map((e, i) => (
            <span key={i} className="letter">
              {e}
            </span>
          ))}
        </h1>
        <div>
          <Image
            priority={true}
            src="/TD64.png"
            className="m-auto py-10"
            width={64}
            height={64}
            alt="i"
          />
        </div>
        <form
          className="flex flex-col justify-center gap-4 "
          onSubmit={handleSubmit}
        >
          {error && <p className="text-red-700">{error}</p>}
          <InputComponent change={setData} />
          <div className="flex items-jenter justify-evenly py-3 gap-2">
            <label>
              <input
                type="radio"
                onChange={setData}
                name="gender"
                value="male"
                required
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                onChange={setData}
                value="female"
              />
              Female
            </label>
          </div>
          <label>
            <input
              type="checkbox"
              onChange={(e) => setPolitic(e.target.checked)}
              name="politic"
              required
            />
            я принимаю политику
            <a href="#" className="text-purple-500 hover:text-blue-700">
              &nbsp; конфидеуеалности
            </a>
          </label>
          <Submit loading={loading} value={"registration"} />
        </form>
        <Weblogin />
      </div>
      <div className="m-auto">
        <Button
          className="hover:text-blue-700 m-auto text-black"
          onClick={() => setReg(false)}
        >
          Go to login page
        </Button>
        <Link
          href={"/"}
          className="text-center py-3  w-full block hover:text-blue-700"
        >
          Go to home page
        </Link>
      </div>
    </div>
  );
}
