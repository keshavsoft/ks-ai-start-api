#!/usr/bin/env node

import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

import { fileNamesJson as getFileNamesJson } from "pattern-collector-base-files";

import fromNarration from "./fromNarration/index.js";

const main = (inSingleArg) => {
    const fileNamesJson = getFileNamesJson();

    fromNarration(inSingleArg);
};

export default main;