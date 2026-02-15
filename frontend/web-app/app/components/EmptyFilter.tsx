"use client";

import { useParamsStore } from "@/hooks/useParamsStore";
import Heading from "./Heading";
import { Button } from "flowbite-react";
import { signIn } from "next-auth/react";

type Props = {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
  showLogin?: boolean;
  callbackUrl?: string;
};

export default function EmptyFilter({
  title = "No matches for this title",
  subtitle = "Try changing the filter or search term",
  showReset,
  showLogin,
  callbackUrl,
}: Props) {
  const reset = useParamsStore((state) => state.reset);

  return (
    <div className="flex flex-col gap-2 items-center justify-center h-[40vh] shadow-lg p-3">
      <Heading title={title} subtitle={subtitle} center />
      <div className="mt-4 ">
        {showReset && (
          <Button
            outline
            onClick={reset}
            className="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
          >
            Remove filters
          </Button>
        )}
        {showLogin && (
          <Button
            outline
            onClick={() => signIn("id-server", { redirectTo: callbackUrl })}
            className="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
          >
            Login
          </Button>
        )}
      </div>
    </div>
  );
}
