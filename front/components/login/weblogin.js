
import {
    Email,
    Facebook,
    Instagram,
    Twitter
  } from "@mui/icons-material";
export default function Weblogin() {
  return (
    <div className=" flex my-5 justify-center items-center flex-wrap gap-2 icon">
    <Email fontSize={"large"} className="hover:text-gray-500 icon-el" />
    <Facebook
      fontSize={"large"}
      className="hover:text-blue-700 icon-el"
    />
    <Instagram fontSize={"large"} className="hover:text-pink-700" />
    <Twitter fontSize={"large"} className="hover:text-blue-700" />
  </div>
  )
}
