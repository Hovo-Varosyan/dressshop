"use client";
import { Button } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import Weblogin from "./weblogin";
import InputComponent from "./input";
import { useChange } from "../../middleware/hooks";
import Submit from "../ui/submit";
import Welcome from "./welcome";
import { loginRequest } from "../../middleware/request/login";
import { useRouter } from "next/navigation";

export default function Login({ setReg }) {
  const router=useRouter()
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { data, setData } = useChange({
    email: "",
    password: "",
  });
  
  return (
    <div className=" flex flex-col justify-between login-page bg-white h-4/6 p-3">
      <div>
       <Welcome/>
        <form
          className="flex flex-col justify-center gap-4 "
          onSubmit={(e)=>loginRequest({e,data, router, setLoading, setError})}
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
