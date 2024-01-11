import { Composer } from "grammy/mod.ts";

const composer = new Composer();

composer.hears(/ping/i, async (ctx) => {
  await ctx.reply("pong", {
    reply_to_message_id: ctx.msg.message_id,
  });
});

export default composer;
