"use client"
import { Button } from "@mui/material";
import { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Order from "../../order/order";
import Favorite from "../favorite";

export default function BuyForm({ Cart }) {
  console.log(Cart)
  const [count, setCount] = useState(Cart.getCount);
  const [showOrder, setShowOrder] = useState(false);



  return (
    <form method="post " className="mx-auto">
      <div className="py-2 text-xl font-roboto  gap-1">
        <b className="py-2">total:{count * 1200}դր</b>
      </div>
      <div className="flex gap-3">
        <Button
          variant="contained"
          disabled={count <= 1}
          onClick={() => setCount(Cart.decrement())}
        >
          -
        </Button>
        <input
          className="text-center shadow-inset"
          type="number"
          onChange={() => Cart.inputCount(parseInt(e.target.value))}
          name="count"
          value={count}
        />
        <Button
          variant="contained"
          disabled={count == Cart.getMaxLimit}
          onClick={() => setCount(Cart.increment())}
        >
          +
        </Button>
      </div>
      <div className="flex gap-2 py-3">
        <Button
          className="flex-grow "
          endIcon={<ShoppingCartIcon />}
          name="Buy"
          variant="contained"
          onClick={() => setShowOrder(true)}
        >
          Buy
        </Button>
        <Favorite id={2} />
      </div>

      {showOrder && <Order setShowOrder={setShowOrder} />}
    </form>
  );
}
