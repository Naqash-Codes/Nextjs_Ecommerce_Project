"use client";

import { useCart } from "@/context/CartContext";
import Cart from "./Cart";

const CartWrapper = () => {
  const { totalCount } = useCart();

  return <Cart count={totalCount} />;
};

export default CartWrapper;