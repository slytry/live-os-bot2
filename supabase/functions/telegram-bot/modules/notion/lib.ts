import { env } from "../../env.ts";
import {
  Client,
  LogLevel,
} from "https://deno.land/x/notion_sdk@v2.2.3/src/mod.ts";

const notion = new Client({
  auth: env.NOTION_TOKEN,
  logLevel: LogLevel.DEBUG,
});

export async function createTask(taskText: string) {
  await notion.pages.create({
    parent: {
      type: "database_id",
      database_id: env.NOTION_TASKS_DATABASE_ID,
    },
    properties: {
      Task: {
        title: [
          {
            text: {
              content: taskText,
            },
          },
        ],
      },
      Status: {
        type: "select",
        select: { id: "1", name: "To Do", color: "red" },
      },
    },
  });
}
