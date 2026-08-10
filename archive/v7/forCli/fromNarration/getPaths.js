#!/usr/bin/env node

import {
    narrationJson as getNarrationJson,
    getTemplateFiles, fileNamesJson as getFileNamesJson
} from "pattern-collector-base-files";

const startFunc = (inNarrationStep) => {
    const narrationJson = getNarrationJson();

    const findNarration = narrationJson?.story?.find(element => {
        return element?.stepName === inNarrationStep;
    });

    const nextSteps = findNarration?.nextSteps;

    if (findNarration) {
        const fileNames = findNarration?.fileNames;
        const fileType = fileNames.at(-1);

        const fileNamesJson = getFileNamesJson();

        if (fileType in fileNamesJson) {

            const defaultRouteToHook = fileNamesJson?.[fileType]?.defaultRouteToHook;
            const inputsFromUser = fileNamesJson?.[fileType]?.inputsFromUser;

            const templatePath = getTemplateFiles(fileType);

            return {
                templatePath, defaultRouteToHook, fileType,
                inputsFromUser, nextSteps
            };
        };

    };
};

export default startFunc;