"use client";
import UserAnalitics from "../../../components/myprofile/userAnalitics";
import UserSave from "../../../components/myprofile/usersave/main";
import userStore from "../../../store/userStore";
import "./style.css";
export default function Page() {

  const { profileData } = userStore()

  return (
    <section className="user-profile p-3">

      {profileData && <> <UserAnalitics />
        <UserSave /></>}
    </section>
  );
}
