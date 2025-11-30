"use client";

import { signIn } from "next-auth/react";

export default function SignUpButton() {
  return (
    <button
      onClick={() => signIn("google")}
      className="text-xl"
    >
      Sign Up
    </button>
  );
}
