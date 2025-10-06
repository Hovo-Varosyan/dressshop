import { Button } from "@mui/material";
import userStore from "../../../store/userStore";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../../app/(index)/provider";
import api from "../../../middleware/api";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';

export default function CartButton({ id }) {
    const cart = userStore()?.profileData?.cart ?? []
    const [loading, setLoading] = useState(false);
    const [cartStatus, setCartStatus] = useState(false);
    const isAuth = useAuth();
    useEffect(() => {
        setCartStatus(cart.includes(id) ?? false)
    }, [cart])
    const router = useRouter();

    function handleSubmit(e) {
        e.preventDefault();
        setLoading(true)
        cartStatus ? api.delete(`/user/product/cart/${id}`)
            .then((e) => {
                setCartStatus(false)
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false)) : api.post("/user/product/cart", { id })
                .then((e) => {
                    setCartStatus(true)
                })
                .catch((err) => console.log(err))
                .finally(() => setLoading(false))

    }
    return (
        <Button sx={{
            color: "red",
            "&:hover": {
                backgroundColor: "#0000001a",
            },
        }} onClick={isAuth ? handleSubmit : () => router.push("/login")} disabled={loading} >
            {cartStatus ? <ShoppingCartOutlinedIcon /> : <RemoveShoppingCartOutlinedIcon />}
        </Button>
    )


}