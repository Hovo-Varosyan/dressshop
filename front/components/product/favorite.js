"use client";
import { Button } from "@mui/material";
import api from "../../middleware/api";
import { useState, useEffect } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useAuth } from "../../app/(index)/provider";
import { useRouter } from "next/navigation";
import userStore from "../../store/userStore";

export default function Favorite({ id }) {
    const favoriteList = userStore()?.profileData?.favorite ?? [];
    const [favorite, setFavorite] = useState(false);
    useEffect(() => {
        setFavorite(favoriteList.includes(id));
    }, [favoriteList]);

    const [loading, setLoading] = useState(false);
    const isAuth = useAuth();
    const router = useRouter();
    
    function handleSubmit(e) {
        if (!isAuth) {
            router.push("/login");
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        console.log("clicked");
        setLoading(true);
        favorite ? api
            .delete(`/user/product/favorite/${id}`)
            .then((e) => {
                userStore.getState().removeFavorite(id);
                setFavorite(false);

            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false)) :
            api
                .post("/user/product/favorite", { id })
                .then((e) => {
                    setFavorite(true);
                    userStore.getState().addFavorite(id);
                })
                .catch((err) => console.log(err))
                .finally(() => setLoading(false));
    }

    return (
        <Button
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
