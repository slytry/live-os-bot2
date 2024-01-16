import { Composer } from "https://deno.land/x/grammy@v1.12.0/mod.ts";

const composer = new Composer();

composer.command("ping", (ctx) =>
  ctx.reply(`Pong! ${new Date()} ${Date.now()}`)
);

export { composer as pingComposer };
