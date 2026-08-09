#!/usr/bin/env node

import fs from "fs";

import fixAnyJs from "express-fix-any-js";
import discover from "discover-from-knowledge";

import {
    narrationJson as getNarrationJson
} from "pattern-collector-base-files";

import stepStart from "../../stepStart/index.js";
import createFolderCopyTemplate from "./createFolderCopyTemplate.js";
import getPaths from "./getPaths.js";

// import loadRunner from "../../core/loadRunnerNoSync.js";

const createFolderCopyTemplate1 = ({ source, destination }) => {
    fs.mkdirSync(destination, { recursive: true });

    fs.cpSync(source, destination, { recursive: true });

    return {
        KTF: true
    };
};

const main = (inNarrationStep) => {
    const { templatePath, defaultRouteToHook, fileType } = getPaths(inNarrationStep);

    const fromCopy = createFolderCopyTemplate({
        source: templatePath,
        destination: defaultRouteToHook
    });

    if (fromCopy?.KTF) {
        fixAnyJs({
            inTargetPath: process.cwd(),
            inFileType: fileType,
            inValue: defaultRouteToHook,
            OutValue: defaultRouteToHook
        });

    };
};

const main1 = (inNarrationStep) => {
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

        const fromCopy = createFolderCopyTemplate({
            source: templatePath,
            destination: defaultRouteToHook
        });

        if (fromCopy?.KTF) {
            fixAnyJs({
                inTargetPath: process.cwd(),
                inFileType: fileType,
                inValue: defaultRouteToHook,
                OutValue: defaultRouteToHook
            });

        };
    };
};

export default main;