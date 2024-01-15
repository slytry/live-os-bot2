import { webhookCallback, Bot } from "grammy/mod.ts";
import composer from "./modules/mod.ts";
import { env } from "./env.ts";

const bot = new Bot(env.BOT_TOKEN);

const handleUpdate = webhookCallback(bot, "serveHttp");

Deno.serve(async (req) => {
  if (req.method === "POST") {
    const url = new URL(req.url);

    const isAllowed = url.searchParams.get("secret") === env.FUNCTION_SECRET;

    if (!isAllowed) {
      return new Response("not allowed", { status: 405 });
    }

    try {
      bot.use(composer);

      return await handleUpdate(req);
    } catch (error) {
      return new Response("Error " + error.message);
    }
  }
  return new Response("Server is UP!");
});
