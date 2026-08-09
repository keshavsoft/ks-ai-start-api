#!/usr/bin/env node

import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

import { fileNamesJson as getFileNamesJson } from "pattern-collector-base-files";

import fromNarration from "./fromNarration/index.js";

const main = (inSingleArg) => {
    const fileNamesJson = getFileNamesJson();

    fromNarration(inSingleArg);

    // if (inSingleArg in fileNamesJson) {
    //     const localRaka = raka ? raka : fileNamesJson[inSingleArg]?.defaultRouteToHook;
    //     const localPoka = poka ? poka : fileNamesJson[inSingleArg]?.defaultRouteToHook;

    //     const fromBin1 = runner({
    //         toPath: process.cwd(),
    //         raka: localRaka, poka: localPoka
    //     });
    // };

    // // console.log("mmmmmmmmmmm : ", fileNamesJson);

    // const fromBin = runner({ toPath: process.cwd() });

    // console.log("mmmmmmmmmmm : ", fromBin);

};

export default main;