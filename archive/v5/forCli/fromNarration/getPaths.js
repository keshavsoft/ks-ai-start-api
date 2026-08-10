#!/usr/bin/env node

import fs from "fs";

import discover from "discover-from-knowledge";

import {
    narrationJson as getNarrationJson,
    getTemplateFiles
} from "pattern-collector-base-files";

const startFunc = (inNarrationStep) => {
    const narrationJson = getNarrationJson();
    const knowledge = discover(process.cwd());

    const findNarration = narrationJson?.story?.find(element => {
        return element?.stepName === inNarrationStep;
    });

    if (findNarration) {
        const fileNames = findNarration?.fileNames;
        const fileType = knowledge?.discovery?.fileType;
        const defaultRouteToHook = knowledge?.discovery?.storyFromFile?.defaultRouteToHook;

        const templatePath = getTemplateFiles(fileType);

        return { templatePath, defaultRouteToHook, fileType };
    };
};

export default startFunc;