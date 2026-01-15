"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { FiUser } from "react-icons/fi";

const ProfileButton = () => {
  const { data: session, status } = useSession();

  // Log session info for debugging
  console.log("ProfileButton session:", session);
  console.log("ProfileButton status:", status);

  const handleClick = () => {
    if (session) {
      // Sign out
      signOut({ redirect: true, callbackUrl: "/" });
    } else {
      // Sign in with Google
      signIn("google", {
        redirect: true,
        callbackUrl: "/",
        prompt: "select_account", // forces account picker
      });
    }
  };

  return (
    <button
      // onClick={handleClick}
      className="flex items-center gap-2 focus:outline-none cursor-pointer"
    >
      {session?.user?.image ? (
        <Image
          src={session.user.image}
          alt={session.user.name || "Profile"}
          width={32}
          height={32}
          className="rounded-full"
        />
      ) : (
        <FiUser size={28} />
      )}
    </button>
  );
};

export default ProfileButton;
