"use client"
import { useState } from "react";
import Submit from "../../../ui/submit";
import api from "../../../../middleware/api";

export default function Security() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    oldPassword: "",
    newPassword: "",
    tryAgainPassword: "",
  });

  function handlaChange(e) {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (data.newPassword !== data.tryAgainPassword) {
      throw "passwords do not match";
    } else if (data.newPassword.length < 6) {
      throw "password must be at least 6 characters";
    } else if (data.newPassword === data.oldPassword) {
      throw "new password must be different from old";
    } else if (!data.oldPassword.trim() || !data.tryAgainPassword.trim() || !data.newPassword.trim()) {
      throw "fill in all fields";
    } else if (newPassword.length >= 30) {
      throw "password must be less than 30 characters";
    } else if (
      !/^(?=.*[A-Z])[a-zA-Z0-9;\[\]{}=\-_+*\/?\s]*$/.test(newPassword)
    ) {
      throw "password must contain at least one uppercase letter";
    }


    api
      .post("/user/password", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }

  return (
    <form className="w-2/6" onSubmit={handleSubmit}>
      <div className="my-8 ">
        <label htmlFor="oldPassword">old password </label>
        <input type="password" id="oldPassword" name="oldPassword" onChange={handlaChange} value={data.oldPassword} title="Old Password" className="w-full" />
      </div>
      <div className="my-8">
        <label htmlFor="newPassword">new password </label>
        <input type="password" name="newPassword" onChange={handlaChange} minLength={6} value={data.newPassword} id="newPassword" title="New Password" className="w-full" />
      </div>
      <div className="my-8">
        <label htmlFor="tryAgainPassword">new password </label>
        <input type="password" name="tryAgainPassword" minLength={6} onChange={handlaChange} value={data.tryAgainPassword} id="tryAgainPassword" title="Try again new password" className="w-full" />
      </div>

      <div className="w-1/5">
        <Submit loading={loading} value="save" />
      </div>
    </form>
  );
}
