import { Button } from "@mui/material";
import userStore from "../../../store/userStore";
import { useState } from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';
import { cartButton } from "../../../middleware/request/cart";
import { useAuth } from "../../../app/(index)/provider";
import { useRouter } from "next/navigation";

export default function CartButton({ id }) {
    const router = useRouter()
    const isAuth=useAuth()
    const [loading, setLoading] = useState(false);
    const cart = userStore(state => state?.profileData?.cart.includes(id)) ?? false;

    return (
        <Button name={cart ? "Delete in cart" : "Add in cart"}
            title={cart ? "Delte in cart" : "Add in cart"}
            sx={{
                color: "red",
                "&:hover": {
                    backgroundColor: "#0000001a",
                },
            }} onClick={(e) => cartButton({ e, id,router, cart, isAuth, setLoading })} disabled={loading} >
            {cart ? <RemoveShoppingCartOutlinedIcon /> : <ShoppingCartOutlinedIcon />}
        </Button>
    )


}