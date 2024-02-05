import React from "react";
import { AuthForm } from "../../components/forms/AuthForm";
import readUserSession from "@/app/auth-server-action/actions";
import { redirect } from "next/navigation";
import { Icons } from "@/components/icons";
import Link from "next/link";

export default async function page() {
  const { data } = await readUserSession();
  if (data.session) {
    return redirect("/");
  }
  return (
    <>
      <>
        <div className="container relative h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
          <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
            <div className="absolute inset-0 bg-gradient-to-t from-[#111627] to-[#344378]" />
            <div className="relative z-20 flex items-center text-lg font-medium">
              <Icons.sunset className="h-20 w-20" />
              Weather Station
            </div>
            <div className="relative z-20 mt-auto">
              <blockquote className="space-y-2">
                <p className="text-lg">
                  &ldquo;Get real-time weather updates on the go with our
                  portable station, making it easy to stay informed and adjust
                  to changing conditions wherever you are.&rdquo;
                </p>
                <footer className="text-sm pt-3">Made with ♡ by Mirutec</footer>
              </blockquote>
            </div>
          </div>
          <div className="lg:p-8">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
              <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">
                  Welcome
                </h1>
                <p className="text-sm text-muted-foreground">
                  Sign in to your account
                </p>
                <AuthForm />
              </div>
              {/* <p className="px-8 text-center text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link
                  href="/login"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Sign Up Now
                </Link>
                .
              </p> */}
            </div>
          </div>
        </div>
      </>
    </>
  );
}
