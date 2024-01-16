import { Composer } from "https://deno.land/x/grammy@v1.12.0/mod.ts";
import start from "./start.ts";
import { notionComposer } from "./notion/mod.ts";
import { pingComposer } from "./ping.ts";

const composer = new Composer();

composer.use(start);
composer.use(pingComposer);
composer.use(notionComposer);

export default composer;
