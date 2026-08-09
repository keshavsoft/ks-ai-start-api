#!/usr/bin/env node

import fs from "fs";

import fixAnyJs from "express-fix-any-js";
import discover from "discover-from-knowledge";

import {
    narrationJson as getNarrationJson,
    getTemplateFiles
} from "pattern-collector-base-files";

import stepStart from "../../stepStart/index.js";

// import loadRunner from "../../core/loadRunnerNoSync.js";

const createFolderCopyTemplate = ({ source, destination }) => {
    fs.mkdirSync(destination, { recursive: true });

    fs.cpSync(source, destination, { recursive: true });

    return {
        KTF: true
    };
};

const main = (inNarrationStep) => {
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


        // const k1 = fs.cpSync(templatePath, ".", { recursive: true });
        console.log("----- : ", fileType, defaultRouteToHook, templatePath, fromCopy);

        if (fromCopy?.KTF) {

            fixAnyJs({
                inTargetPath: process.cwd(),
                inFileType: fileType,
                inValue: defaultRouteToHook,
                OutValue: defaultRouteToHook
            });

        };

    };

    // // console.log("mmmmmmmmmmm : ", fileNamesJson);

    // const fromBin = runner({ toPath: process.cwd() });

    // console.log("mmmmmmmmmmm : ", fromBin);

};

export default main;