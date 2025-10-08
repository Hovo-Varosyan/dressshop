import { Button } from "@mui/material";
import userStore from "../../../store/userStore";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../../app/(index)/provider";
import api from "../../../middleware/api";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';

export default function CartButton({ id }) {
    const [loading, setLoading] = useState(false);
    const cart = userStore(state => state?.profileData?.cart.includes(id)) ?? false;
    const isAuth = useAuth();
    const router = useRouter();
    console.log(cart)


    function handleSubmit(e) {

        e.preventDefault();
        e.stopPropagation();

        if (!isAuth) {
            router.push("/login");
            return;
        }

        setLoading(true)
        const request = cart ? api.delete(`/user/product/cart/${id}`) :
            api.post("/user/product/cart", { id })

        request.then((e) => {
            cart ? userStore.getState().cartRemove(id) :
                userStore.getState().cartAdd(id)
        })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))

    }

    return (
        <Button name={cart ? "Delete in cart" : "Add in cart"} 
        title={cart?"Delte in cart":"Add in cart"} 
        sx={{
            color: "red",
            "&:hover": {
                backgroundColor: "#0000001a",
            },
        }} onClick={handleSubmit} disabled={loading} >
            {cart ? <RemoveShoppingCartOutlinedIcon /> : <ShoppingCartOutlinedIcon />}
        </Button>
    )


}