import { Composer } from "grammy/mod.ts";

import start from "./start.ts";
import cloner from "./notion.ts";
import ping from "./ping.ts";

const composer = new Composer();

composer.use(start);
composer.use(cloner);
composer.use(ping);

export default composer;
