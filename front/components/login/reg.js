"use client";
import { Button } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import Weblogin from "./weblogin";
import InputComponent from "./input";
import { useChange } from "../../middleware/hooks";
import Submit from "../ui/submit";
import Welcome from "./welcome";
import { registrRequest } from "../../middleware/request/login";
import { useRouter } from "next/navigation";

export default function Registration({ setReg }) {
  const router=useRouter()
  const [politic, setPolitic] = useState(false);
  const [error, setError] = useState(false);
  const { data, setData } = useChange({
    email: "",
    password: "",
    gender: "",
  });
  const [loading, setLoading] = useState(false);

  return (
    <div className=" flex flex-col justify-between login-page bg-white h-4/6 p-3">
      <div>
        <Welcome />
        <form
          className="flex flex-col justify-center gap-4 "
          onSubmit={(e) => registrRequest({ e, data, politic, setLoading, setError })}
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
