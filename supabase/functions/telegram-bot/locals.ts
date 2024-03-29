import { Bot } from "https://deno.land/x/grammy@v1.12.0/mod.ts";

import composer from "./modules/mod.ts";
import { env } from "./env.ts";

// we set up a test instance for the bot, using the BOT_TOKEN provided in the .env file.

const bot = new Bot(env.BOT_TOKEN);
await bot.init();
console.info(`Started as @${bot.botInfo.username}`);

await bot.api.deleteWebhook();

bot.use(composer);

bot.start({
  drop_pending_updates: true,
  allowed_updates: ["message"],
});

Deno.addSignalListener("SIGINT", () => bot.stop());
Deno.addSignalListener("SIGTERM", () => bot.stop());
