#!/usr/bin/env node

import { fileNamesJson as getFileNamesJson } from "pattern-collector-base-files";

import getLatestVersion from "../core/getLatestVersion.js";
import loadRunner from "../core/loadRunnerNoSync.js";

const main = (inSingleArg) => {
    const fileNamesJson = getFileNamesJson();

    const version = getLatestVersion();
    const runner = loadRunner(version);

    if (inSingleArg in fileNamesJson) {
        const localRaka = raka ? raka : fileNamesJson[inSingleArg]?.defaultRouteToHook;
        const localPoka = poka ? poka : fileNamesJson[inSingleArg]?.defaultRouteToHook;

        const fromBin1 = runner({
            toPath: process.cwd(),
            raka: localRaka, poka: localPoka
        });
    };

    // console.log("mmmmmmmmmmm : ", fileNamesJson);

    const fromBin = runner({ toPath: process.cwd() });

    // console.log("mmmmmmmmmmm : ", fromBin);

};

export default main;