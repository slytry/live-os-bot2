import { load } from "dotenv";
import { cleanEnv, str } from "envalid";

await load({ export: true });

export const env = cleanEnv(Deno.env.toObject(), {
  BOT_TOKEN: str(),
  NOTION_TOKEN: str(),
  WEBHOOK_PATH: str(),
});
