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
    const { favorite: favoriteList  } = userStore()?.profileData ?? []
    const [favorite, setfavorite] = useState(favoriteList?.includes(id));
    const [loading, setLoading] = useState(false);
    const isAuth = useAuth();
    const router = useRouter()
    function addFavorite(e) {
        e.preventDefault();
        e.stopPropagation()
        setLoading(true);
        api
            .post("/user/product/favorite", { id })
            .then((e) => {
                setfavorite(true);
            })
            .catch((err) => console.log(err)).finally(() => setLoading(false))
    }

    function removeFavorite(e) {
        e.preventDefault();
        e.stopPropagation()

        setLoading(true);
        api
            .delete(`/user/product/favorite/${id}`)
            .then((e) => {
                setfavorite(false);
            })
            .catch((err) => console.log(err)).finally(() => setLoading(false))
    }

    return (
        <Button
            sx={{
                color: "black",
                "&:hover": {
                    backgroundColor: "#0000001a",
                },
            }}
            onClick={isAuth ? favorite ? removeFavorite : addFavorite : () => router.push("/login")}
            aria-label="favorite-change"
            size="large"
            disabled={loading}
        >
            {favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </Button>
    );
}
