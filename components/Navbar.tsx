import Link from "next/link";
import NavInput from "./NavInput";
import Favouritebtn from "./Favouritebtn";
import Cart from "./Cart";
import ProfileButton from "./ProfileButton";
import { auth } from "@/lib/auth"; // server-side helper

const Navbar = async () => {
  const session = await auth(); // server-side

  const navMenu = [
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
    { name: "About", href: "/about" },
    { name: "Sign Up", href: "/about" },
  ];

  return (
    <nav className="flex justify-between items-center px-6 xl:px-24 py-3 border-b border-gray-300">
      <h1 className="text-3xl font-bold">Exclusive</h1>

      <div className="flex gap-8">
        {navMenu.map((link) => (
          <Link key={link.name} href={link.href} className="text-xl">
            {link.name}
          </Link>
        ))}
      </div>

      <div className="flex justify-center gap-6 items-center">
        <NavInput />
        <Favouritebtn />
        <Cart />
        <ProfileButton session={session} /> 
      </div>
    </nav>
  );
};

export default Navbar;
