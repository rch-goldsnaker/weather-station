"use client";
import createSupabaseClientClient from "@/lib/supabase/client";
import { unstable_noStore as noStore } from "next/cache";

export async function signInWithOAuthGitHub() {
  const supabase = await createSupabaseClientClient();
  const result = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: `${location.origin}/auth/callback`,
    },
  });
  return result;
}

export async function readUserSession() {
  noStore();
  const supabase = await createSupabaseClientClient();
  return supabase.auth.getSession();
}
