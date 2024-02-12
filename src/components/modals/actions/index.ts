"use server";

import createSupabaseServerClient from "@/lib/supabase/server";
import { revalidatePath,unstable_noStore as noStore } from "next/cache";

export async function createSetting(data) {
  const supabase = await createSupabaseServerClient();

  const result = await supabase
    .from("weather-station")
    .insert({
      entityType: data.entityType,
      entityId: data.entityId,
      keys: data.keys,
      useStrictDataTypes:data.useStrictDataTypes
    })
    .single();
  
    revalidatePath("/")
  return result;
}

export async function readSetting() {
  noStore();
  const supabase = await createSupabaseServerClient();
  return await supabase.from("weather-station").select("*").order("created_at", { ascending: false }).limit(1);
}

export async function deleteTodoById(id: string) {}

export async function updateTodoById(id: string, completed: boolean) {}
