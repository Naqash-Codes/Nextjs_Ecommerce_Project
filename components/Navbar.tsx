import Link from "next/link";
import NavInput from "./NavInput";
import Favouritebtn from "./Favouritebtn";
import Cart from "./Cart";
import ProfileButton from "./ProfileButton";
import SignUpButton from "./SignUpButton";   // <-- new
import { auth } from "@/lib/auth";

const Navbar = async () => {
  const session = await auth();

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
        <ProfileButton />
      </div>
    </nav>
  );
};

export default Navbar;
