import Submit from "../../../ui/submit";
import userStore from "../../../../store/userStore";
import { useState } from "react";
import api from "../../../../middleware/api";

export default function Contact() {

  const { userData } = userStore().profileData;
  const { updateUserData } = userStore();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    email: userData?.email ?? "",
    tel: userData?.tel ?? "",
    postCode: userData?.postCode ?? "",
  });
  function handlaChange(e) {
    const { id, value } = e.target;
    setData((prev) => ({ ...prev, [id]: value }));
  }
  function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    api
      .post("/user/contact", data)
      .then((res) => {
        console.log(res.data);
        updateUserData(res.data.userData);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }
  console.log(data);
  return (
    <form onSubmit={onSubmit} className="w-2/5">
      <div className="w-full contact-div">
        <div>
          <label htmlFor="email">edit email </label>
          <input
            type="text"
            placeholder="Myemaiil@mail.ru"
            value={data.email}
            onChange={handlaChange}
            id="email"
          />
        </div>
        <div>
          <label htmlFor="tel">edit phone </label>
          <input
            type="text"
            placeholder="My phone number"
            value={data.tel}
            onChange={handlaChange}
            id="tel"
          />
        </div>
        <div>
          <label htmlFor="postCode">edit post code </label>
          <input
            type="text"
            placeholder="My post index"
            pattern="\d{4}"
            title="Введите 4 цифры"
            name="post code"
            value={data.postCode}
            onChange={handlaChange}
            id="postCode"
          />
        </div>
      </div>
      <div className="w-1/6  py-4">
        <Submit value="Save" loading={loading} />
      </div>
    </form>
  );
}
