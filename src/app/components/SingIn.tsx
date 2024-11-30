"use client";

import { Button } from "@mui/material";
import { type JSX, type SVGProps } from "react";
import Link from "next/link";
import { createClient } from "~/server/auth/client";

export default function SignIn() {
  //   const router = useRouter();

  /*  const handleSignIn = async () => {
        const result = await signIn("google", { callbackUrl: "/parametrs" });
        if (result?.url) {
            router.push(result.url);
        }
    }; */

  const handleSignIn = async () => {
    const supabase = createClient();
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center">
      <div className="bg-background mx-auto max-w-md rounded-lg p-6 shadow-xl">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold">Prijava v Senzemo</h1>
          <p className="text-muted-foreground">
            Prijavite se z vašim Google računom in začnite uporabljati Senzemo.
          </p>
        </div>
        <div className="mt-6">
          <Button
            className="border-muted-foreground bg-background text-muted-foreground hover:bg-muted hover:text-muted-foreground-2 flex w-full items-center justify-center gap-2 rounded-md px-4 py-2 transition-colors"
            onClick={handleSignIn}
          >
            <ChromeIcon className="h-5 w-5" />
            Prijava z Google
          </Button>
        </div>
        <div className="text-muted-foreground mt-6 text-center text-sm">
          S prijavo se strinjate z našimi{" "}
          <Link
            href="#"
            className="hover:text-primary underline"
            prefetch={false}
          >
            pogoji
          </Link>
          in{" "}
          <Link
            href="#"
            className="hover:text-primary underline"
            prefetch={false}
          >
            politiko zasebnosti
          </Link>
          .
        </div>
      </div>
    </div>
  );
}

function ChromeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  );
}
