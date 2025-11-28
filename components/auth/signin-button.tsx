"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export default function SignInButton() {
  return (
    <Button 
      onClick={() => signIn("google")}
      className="flex items-center gap-2 border shadow-md hover:shadow-lg transition rounded-xl px-4 py-2"
      variant="outline"
    >
      <FcGoogle size={22} />
      Sign in with Google
    </Button>
  );
}