"use client";
import { Button } from "@mui/material";
import api from "../../middleware/api";
import { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useAuth } from "../../app/(index)/provider";
import { useRouter } from "next/navigation";
import userStore from "../../store/userStore";

export default function Favorite({ id }) {
    const favorite = userStore(state => state?.profileData?.favorite.includes(id)) ?? false;


    const [loading, setLoading] = useState(false);
    const isAuth = useAuth();
    const router = useRouter();

console.log(favorite)

    function handleSubmit(e) {

        e.preventDefault();
        e.stopPropagation();
        if (!isAuth) {
            router.push("/login");
            return;
        }


        setLoading(true);
        const request = favorite ? api.delete(`/user/product/favorite/${id}`) : api
            .post("/user/product/favorite", { id })
        request
            .then((e) => {
                favorite ? userStore.getState().removeFavorite(id) : userStore.getState().addFavorite(id);
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }

    return (
        <Button name={favorite ? "Delete in favorite" : "Add in favorite"}
        title={favorite ? "Delete in favorite" : "Add in favorite"}
            sx={{
                color: "black",
                "&:hover": {
                    backgroundColor: "#0000001a",
                },
            }}
            onClick={handleSubmit}
            aria-label="favorite-change"
            size="large"
            disabled={loading}
        >
            {favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </Button>
    );
}
