#!/usr/bin/env node

import getKnowledge from "discover-from-knowledge";

import { narrationJson as getNarrationJson } from "pattern-collector-base-files";

const main = () => {
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
};

export default main;