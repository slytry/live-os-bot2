import { Composer } from "https://deno.land/x/grammy@v1.12.0/mod.ts";
import { CREATE_NEW_TASK_PATTERN, text } from "./constants.ts";
import { createTask } from "./lib.ts";
import { checkMessage } from "./helpers.ts";

const composer = new Composer();

composer.hears(CREATE_NEW_TASK_PATTERN, async (ctx) => {
  const reply = await ctx.reply(text.GENERATING);

  const taskText = checkMessage(ctx.message!.text).trim().substring(2);

  await createTask(taskText);

  await ctx.api.editMessageText(ctx.chat!.id, reply.message_id, text.SUCCESS);
});

export { composer };
