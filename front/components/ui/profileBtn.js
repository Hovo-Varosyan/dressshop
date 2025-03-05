import PersonIcon from "@mui/icons-material/Person";
import Link from "next/link";

export default function ProfileBtn({ isAuth }) {
  return (
    <div>
      <Link
        title="my profile"
        className="capitalize text-xl m-6"
        href={isAuth ? "/myprofile" : "/login"}
      >
        <PersonIcon />
      </Link>
    </div>
  );
}
