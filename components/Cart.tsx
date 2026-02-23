import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";

const Cart = () => {
  return (
    <div>
      <Link href="/cart">
        <FiShoppingCart size={24} />
      </Link>
    </div>
  );
};

export default Cart;
