"use server";

import { createClient } from "../utils/supabase/server";

export default async function Rols() {
    const supabase = await createClient();
    const { data: rols } = await supabase.from("rol").select();
    return <pre>{JSON.stringify(rols, null, 2)}</pre>
  }