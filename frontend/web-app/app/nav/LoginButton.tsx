"use client";

import { Button } from "flowbite-react";
import { signIn } from "next-auth/react";

export default function LoginButton() {
  return (
    <Button
      outline
      onClick={() =>
        signIn("id-server", { redirectTo: "/" }, { prompt: "login" })
      }
      className="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
    >
      Login
    </Button>
  );
}
