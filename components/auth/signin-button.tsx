"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export default function SignInButton() {
  return (
    <Button 
      onClick={() => signIn("google")}
      className="flex items-center gap-2 border-2 border-gray-300 transition rounded-sm py-6 cursor-pointer"
      variant="outline"
    >
      <FcGoogle size={22} />
      Sign in with Google
    </Button>
  );
}