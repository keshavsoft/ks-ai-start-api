#!/usr/bin/env node

import { narrationJson as getNarrationJson } from "pattern-collector-base-files";

import getLatestVersion from "../core/getLatestVersion.js";
import loadRunner from "../core/loadRunnerNoSync.js";

const main = (inSingleArg) => {
    const fromKnowledge = getKnowledge(process.cwd());
    const fileType = fromKnowledge?.discovery?.fileType;
    const narrationJson = getNarrationJson();

    const findNarration = narrationJson?.story.find(element => {
        return element?.fileNames.find(fileNameLoop => {
            return fileNameLoop === fileType;
        });
    });

    const stepToRun = findNarration?.stepName;

    if (stepToRun) {
        console.log(`${stepToRun}`);
    };

    const version = getLatestVersion();
    const runner = loadRunner();

    const fromBin = runner.default({
        raka: inSingleArg, poka: inSingleArg,
        toPath: process.cwd()
    });

    console.log("mmmmmmmmmmm : ", fromBin);

};

export default main;