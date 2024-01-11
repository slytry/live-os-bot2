import { Composer } from "grammy/mod.ts";
import { Client, LogLevel } from "notion";
import { env } from "../../env.ts";

const notion = new Client({
  auth: env.NOTION_TOKEN,
  logLevel: LogLevel.DEBUG,
});

const page = await notion.databases.query({
  database_id: "bcb8bc7df7d24bfd80487b9854787fe8",
});

// const listUsersResponse = await notion.users.list({});
// console.log(listUsersResponse);

const composer = new Composer();

// composer.on("msg:text", async (ctx) => {
//   console.log(ctx);
//   const reply = await ctx.reply(JSON.stringify(ctx));
//   console.log(reply);
// });

composer.hears(/todo/i, async (ctx) => {
  const reply = await ctx.reply("Generating a new task.. Please wait..");
});
// https://www.notion.so/naumovview/bcb8bc7df7d24bfd80487b9854787fe8?v=ec419a16c77d468eb12bb48b0c749244&pvs=4
composer.hears(/ping/i, async (ctx) => {
  await ctx.reply("pong", {
    reply_to_message_id: ctx.msg.message_id,
  });
});
// {
//   const entities = ctx.message?.entities;
//   const msgText = ctx.message?.text || "";
//   const reply = await ctx.reply("Generating a clone.. Please wait..");
//   // extract bot token
//   const bot_token = extractBotToken(msgText, entities);
//   if (bot_token !== undefined) {
//     // Create an instance of the `Bot` class and pass your authentication token to it.
//     const bot = await genBot(bot_token);
//     if (bot) {
//       try {
//         // get the current bots webhook and extract domain
//         const webhookInfo = await ctx.api.getWebhookInfo();
//         const domain = webhookInfo.url?.split(config.WEBHOOK_PATH)[0];
//         await bot.api.setWebhook(
//           `${domain}${config.WEBHOOK_PATH}?token=${bot_token}`
//         );
//       } catch (e) {
//         console.error(e);
//       }
//     }
//     await ctx.api.editMessageText(
//       ctx.chat!.id,
//       reply.message_id,
//       `Successfully created a clone on @${bot.botInfo.username}!`
//     );
//   }
// }

export default composer;
