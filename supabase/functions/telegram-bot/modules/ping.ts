import { Composer } from "grammy/mod.ts";

const composer = new Composer();

composer.command("ping", (ctx) =>
  ctx.reply(`Pong! ${new Date()} ${Date.now()}`)
);

export { composer as pingComposer };
