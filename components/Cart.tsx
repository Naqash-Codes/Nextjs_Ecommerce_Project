"use client";

import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";

type CartProps = {
  count: number;
};

const Cart = ({ count }: CartProps) => {
  return (
    <Link href="/cart">
      <div className="relative cursor-pointer">
        {/* Cart Icon */}
        <FiShoppingCart size={24} />

        {/* Badge */}
        {count > 0 && (
          <span className="absolute -top-1 -right-2 bg-primary text-white text-xs font-semibold w-4 h-4 flex items-center justify-center rounded-full">
            {count}
          </span>
        )}
      </div>
    </Link>
  );
};

export default Cart;