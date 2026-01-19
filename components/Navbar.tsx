import Link from "next/link";
import NavInput from "./NavInput";
import Favouritebtn from "./Favouritebtn";
import Cart from "./Cart";
import ProfileButton from "./ProfileButton";
import { User, Handbag, CircleX, Star, LogOut } from 'lucide-react';

const Navbar = async () => {
  const navMenu = [
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
    { name: "About", href: "/about" },
    { name: "Sign Up", href: "/signup" },
  ];

  return (
    <nav className="flex justify-between items-center px-6 xl:px-24 py-3 border-b border-gray-300">
      <h1 className="text-3xl font-bold">Exclusive</h1>

      {/* Links except Sign Up */}
      <div className="flex gap-8">
        {navMenu.map((link) => (
          <Link key={link.name} href={link.href} className="text-xl">
            {link.name}
          </Link>
        ))}

        {/* Sign Up button triggers Google Login
        <SignUpButton /> */}
      </div>

      <div className="flex justify-center gap-6 items-center">
        <NavInput />
        <Favouritebtn />
        <Cart />
        <div className="relative group">
          <ProfileButton />
          <div className="absolute right-0 z-10 pt-2 opacity-0 invisible -translate-y-2 transition-all ease-out group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 duration-200">
            <ul className="bg-black/30 backdrop-blur-2xl rounded-md py-4 px-6 w-60 text-white space-y-4 shadow-md pointer-events-auto">
              <li className="flex items-center gap-2 cursor-pointer">
                <User />
                <p>Manage My Account</p>
              </li>
              <li className="flex items-center gap-2 cursor-pointer">
                <Handbag />
                <p>My Order</p>
              </li>
              <li className="flex items-center gap-2 cursor-pointer">
                <CircleX />
                <p>My Cancellations</p>
              </li>
              <li className="flex items-center gap-2 cursor-pointer">
                <Star />
                <p>My Reviews</p>
              </li>
              <li className="flex items-center gap-2 cursor-pointer">
                <LogOut />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
