"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export default function SignInButton() {
  const handleSignIn = () => {
    signIn("google", {
      callbackUrl: "/",
      prompt: "select_account", // forces Google to ask which account
    });
  };

  return (
    <Button
      onClick={handleSignIn}
      className="flex items-center gap-2 border-2 border-gray-300 rounded-sm py-6"
      variant="outline"
    >
      <FcGoogle size={22} />
      Sign in with Google
    </Button>
  );
}
