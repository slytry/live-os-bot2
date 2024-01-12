import { Composer } from "grammy/mod.ts";
import start from "./start.ts";
import { notionComposer } from "./notion/mod.ts";

const composer = new Composer();

composer.use(start);
composer.use(notionComposer);

export default composer;
