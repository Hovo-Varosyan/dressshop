"use client"
import { useState } from "react";
import "./style.css";
import Login from "../../../components/login/login";
import Registration from "../../../components/login/reg";

export default function Page() {
  const [reg, setReg] = useState(false);

  return reg ? <Registration setReg={setReg}/> : <Login setReg={setReg} />;
}
