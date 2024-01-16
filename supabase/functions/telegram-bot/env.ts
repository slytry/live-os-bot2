import { load } from "https://deno.land/std@0.211.0/dotenv/mod.ts";
import { cleanEnv, str } from "https://deno.land/x/envalid@0.1.2/mod.ts";

await load({ export: true });

export const env = cleanEnv(Deno.env.toObject(), {
  BOT_TOKEN: str(),
  NOTION_TOKEN: str(),
  NOTION_TASKS_DATABASE_ID: str(),
  FUNCTION_SECRET: str(),
});
