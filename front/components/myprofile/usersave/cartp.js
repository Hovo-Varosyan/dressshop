import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Order from "../../order/order";
import { useState } from "react";

export default function OrderCart({ Cart }) {
    const [count, setCount] = useState(Cart.getCount);
    const [showOrder, setShowOrder] = useState(false);
    return (
        <>  <div className="flex gap-2">
            <Button
                className="bg-red-500 ml-[-1%] rounded-l-none hover:bg-sell-red"
                variant="contained"
                disabled={Cart.getCount <= 1}
                onClick={() => setCount(Cart.decrement())}
            >
                -
            </Button>
            <input
                className="text-center shadow-inset w-6/12"
                type="number"
                onChange={(e) => setCount(Cart.inputCount(parseInt(e.target.value)))}
                name="count"
                value={count}
            />

            <Button
                className="bg-green-600 mr-[-1%] rounded-r-none hover:bg-green-700"
                variant="contained"
                disabled={count == Cart.getMaxLimit}
                onClick={() => setCount(Cart.increment())}
            >
                +
            </Button>
        </div>
            <Button
                className="w-[102%] ml-[-1%] bg-sell-red hover:bg-green-700 rounded-none"
                endIcon={<ShoppingCartIcon />}
                name="Buy"
                variant="contained"
                onClick={() => setShowOrder(true)}
            >
                Buy
            </Button>
            {showOrder && <Order setShowOrder={setShowOrder} />}

        </>
    )
}
