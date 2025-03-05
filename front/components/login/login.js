"use client";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { letterFall } from "../../assets/animation/animatio";
import Weblogin from "./weblogin";
import InputComponent from "./input";
import { useChange } from "../../middleware/hooks";
import api from "../../middleware/api";
import { useRouter } from "next/navigation";
import Submit from "../ui/submit";

export default function Login({ setReg }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { data, setData } = useChange({
    email: "",
    password: "",
  });
  const router = useRouter();
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    threshold: 1,
  });
  useEffect(() => {
    if (inView) {
      const size= entry?.boundingClientRect?.height || 100;
      letterFall(size);
    }
  }, [inView]);

  async function handlesubmit(e) {
    e.preventDefault();
    if (!data.email || !data.password) return setError(true);
    if (error) setError(false);
    setLoading(true);
    api
      .post("/login", data)
      .then(() => router.replace("/myprofile"))
      .catch((err) => {
        if (err.reponse?.data?.status === false) {
          setError("*Error validate data");
        } else {
          setError("*Try again later");
        }
        console.log(err)
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
            src="/TD64.png"
            className="m-auto w-auto py-10"
            width={64}
            height={64}
            alt="i"
          />
        </div>
        <form
          className="flex flex-col justify-center gap-4 "
          onSubmit={handlesubmit}
        >
          {error && <p className="text-red-700">{error}</p>}
          <InputComponent change={setData} />
          <Submit loading={loading} value="Sign in" />
        </form>
        <Weblogin />
        <span className="block text-center w-full capitalize py-3">or</span>
        <Button
          onClick={() => setReg(true)}
          className="bg-black hover:bg-black text-white w-full"
        >
          registration
        </Button>
      </div>
      <div>
        <Link
          href={"#"}
          className="text-center py-3  w-full block hover:text-blue-700"
        >
          Forget your password
        </Link>
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
