"use client"
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import userStore from "../../store/userStore";

export default function ShoppingBag({ isAuth }) {
    const {profileData} = userStore()
    return (
        <div className="relative ">
            <ShoppingBagOutlinedIcon />
            {isAuth && profileData && (
                <div className="absolute top-0 right-0 aspect-[1/1] bg-red-500 flex-wrap pb-[4px]  rounded-[50%] min-h-3 min-w-3 flex content-center justify-center text-xs">
                    {profileData.favorite.length}
                </div>
            )}
        </div>
    );
}
