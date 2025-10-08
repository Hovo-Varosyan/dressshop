"use client"
import PersonIcon from "@mui/icons-material/Person";
import Link from "next/link";
import { useAuth } from "../../app/(index)/provider";

export default  function ProfileBtn({ text = false }) {
  const isAuth=useAuth()
  return (
    <Link
      title="my profile"
      className="capitalize text-xl md:mx-6"
      href={ isAuth?"/myprofile" : "/login"}
    >
      {text ? "My Profile" : <PersonIcon />}
    </Link>
  );
}
