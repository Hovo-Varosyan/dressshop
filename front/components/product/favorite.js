"use client";
import { Button } from "@mui/material";
import { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import userStore from "../../store/userStore";
import favoriteRequest from "../../middleware/request/favorite";
import { useAuth } from "../../app/(index)/provider";
import { useRouter } from "next/navigation";

export default function Favorite({ id }) {
    const isAuth = useAuth()
    const favorite = userStore(state => state?.profileData?.favorite.includes(id)) ?? false;
    const router = useRouter()

    const [loading, setLoading] = useState(false);

    return (
        <Button name={favorite ? "Delete in favorite" : "Add in favorite"}
            title={favorite ? "Delete in favorite" : "Add in favorite"}
            sx={{
                color: "black",
                "&:hover": {
                    backgroundColor: "#0000001a",
                },
            }}
            onClick={(e) => favoriteRequest({ e, router, isAuth, favorite, id, setLoading })}
            aria-label="favorite-change"
            size="large"
            disabled={loading}
        >
            {favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </Button>
    );
}
