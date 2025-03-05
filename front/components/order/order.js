"use client";
import { CloseSharp } from "@mui/icons-material";
import { Button, Select, TextField } from "@mui/material";
import "../../assets/style/order.css";
import {   useState } from "react";

export default function Order({
  setShowOrder,
}) {
 

  const [edit, setEdit] = useState("edit");
  console.log(edit);
  return (
    <section className="order capitalize">
      <div className="flex column">
        <div className="text-center relative mb-3">
          <h3>orders</h3>
          <CloseSharp onClick={() => setShowOrder(false)} className="close" />
        </div>
        <div className="flex gap-3 w-full h-full">
          <div className="list flex  justify-between py-2 px-3">
            <div>+ new</div>
            {[...Array(7)].map((_, i) => (
              <div key={i}>order {++i}</div>
            ))}
          </div>
          <div className="content flex justify-between  py-2 grow pr-3">
            <div className="flex justify-center gap-4 ">
              <TextField label="Name" required />
              <TextField label="Last Name" required />
            </div>
            <div className="flex justify-center gap-4 ">
              <Select value={"Երևան"} />
              <Select value={"Երևան"} />
            </div>
            <div className="flex justify-center gap-4 ">
              <TextField label="stret" required />
              <TextField label="home" required />
            </div>
            <div className="flex justify-center gap-4 ">
              <TextField label="tel" type="tel" required />
              <TextField label="post code" type="number" required />
            </div>
            <div className="flex justify-around gap-4 mb-4">
              {edit == "edit" && <Button>ВЫБРАТЬ</Button>}
              <Button onClick={() => setEdit("save")}>обновить</Button>
              {edit == "save" && (
                <Button onClick={() => setEdit("edit")}>отменить</Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
