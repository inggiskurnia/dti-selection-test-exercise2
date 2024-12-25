"use client";

import { useCart } from "@/utils/provider/CartContext";
import { FC } from "react";

const Cart: FC = () => {
  const { cart } = useCart();
  return (
    <div className="h-10 w-full bg-white text-black flex gap-2 justify-center items-center">
      <p>Cart</p>
      <p>{cart.length}</p>
    </div>
  );
};

export default Cart;
