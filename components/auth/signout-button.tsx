"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <Button 
      onClick={() => signOut()}
      className="rounded-xl px-4 py-2 shadow-md hover:shadow-lg"
    >
      Sign Out
    </Button>
  );
}
