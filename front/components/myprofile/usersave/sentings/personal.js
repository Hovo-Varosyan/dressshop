"use client";
import { useState } from "react";
import Submit from "../../../ui/submit";
import userStore from "../../../../store/userStore";
import api from "../../../../middleware/api";
export default function Personal() {
  const [loading, setLoading] = useState(false);
  const { userData } = userStore().profileData;
  const { updateUserData } = userStore();
  const [data, setData] = useState({
    name: userData?.name ?? "",
    lastName: userData?.lastName ?? "",
    date: userData?.date ? userData.date.split("T")[0] : "",
    gender: userData?.gender ?? "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  }
  function onSubmit(e) {
    e.preventDefault();
    api.patch("/user/maindata", data)
      .then((res) => {
        console.log(res.data);
        updateUserData(res.data.userData);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
    setLoading(true);
  }
  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-wrap div-container">
        <div>
          <label htmlFor="name"> edit name</label>
          <input
            name="name"
            type="text"
            id="name"
            title="name"
            onChange={handleChange}
            value={data.name}
            placeholder="Name"
          />
        </div>
        <div>
          <label htmlFor="lastname"> edit lastname</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={data.lastName}
            onChange={handleChange}
            title="Last name"
            placeholder="LastName"
          />
        </div>
        <div className="w-full">
          <label htmlFor="date">edit date </label>
          <input
            onChange={handleChange}
            type="date"
            id="date"
            name="date"
            value={data.date}
            title="your_birthaday_date"
          />
        </div>
        <div className="text-center">
          Gender
          <div className="flex items-center justify-evenly py-3 gap-2 w-full">
            <label>
              <input type="radio" onChange={handleChange} name="gender" title="male" value="male" checked={data.gender === "male"} required />
              Male
            </label>
            <label>
              <input type="radio" onChange={handleChange} name="gender" title="female" value="female" checked={data.gender === "female"} />
              Female
            </label>
          </div>
        </div>
      </div>
      <div className="w-1/5 px-4 ">
        <Submit value="Save" loading={loading} />
      </div>
    </form>
  );
}
