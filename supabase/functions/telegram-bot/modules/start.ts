import { Composer } from "https://deno.land/x/grammy@v1.12.0/mod.ts";

const composer = new Composer();

composer.command("start", async (ctx) => {
  await ctx.reply("Hi, I'm online!");
});

export default composer;
