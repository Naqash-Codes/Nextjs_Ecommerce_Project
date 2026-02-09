import Link from "next/link";
import { FiHeart } from "react-icons/fi";


const Favouritebtn = () => {
  return (
    <Link href="/wishlist">
      <FiHeart size={24} />
    </Link>
  )
}

export default Favouritebtn