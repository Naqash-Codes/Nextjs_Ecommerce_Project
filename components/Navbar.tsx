"use client";

import Link from "next/link";
import NavInput from "./NavInput";
import Favouritebtn from "./Favouritebtn";
import Cart from "./Cart";
import ProfileButton from "./ProfileButton";
import { User, Handbag, CircleX, Star, LogOut, Menu, X } from "lucide-react";

import CartWrapper from "./CartWrapper";
import { useState } from "react";

const Navbar = () => {
  const navMenu = [
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
    { name: "About", href: "/about" },
    { name: "Sign Up", href: "/signup" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="relative z-50">
        <nav className="flex justify-between items-center px-6 xl:px-24 py-3 border-b border-gray-300">
          <h1 className="text-3xl font-bold">Exclusive</h1>

          <div
            onClick={() => setIsOpen(!isOpen)}
            className="block md:hidden absolute right-6 z-50"
          >
            {isOpen ? <X /> : <Menu />}
          </div>

          {/* Links except Sign Up */}
          <div className="hidden md:flex gap-8">
            {navMenu.map((link) => (
              <Link key={link.name} href={link.href} className="text-xl">
                {link.name}
              </Link>
            ))}

            {/* Sign Up button triggers Google Login
        <SignUpButton /> */}
          </div>

          <div className="hidden md:flex justify-center gap-6 items-center">
            <NavInput />
            <Favouritebtn />
            <CartWrapper />
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
        <div
          className={`absolute top-full z-0 py-[30px] w-full flex flex-col gap-7 justify-center items-center rounded-b-2xl shadow-xl 
        ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"} 
        transition-all duration-400 ease-in-out`}
        >
          {navMenu.map((link) => (
            <Link key={link.name} href={link.href} className="text-xl">
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
