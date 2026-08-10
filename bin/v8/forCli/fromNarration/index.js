#!/usr/bin/env node

import fixAnyJs from "express-fix-any-js";
import readline from "node:readline/promises";
import { stdin as input, stderr as output } from "node:process";

import createFolderCopyTemplate from "./createFolderCopyTemplate.js";
import getPaths from "./getPaths.js";

const captureInput = async (labelToShow) => {
    const rl = readline.createInterface({ input, output });

    const tableName = await rl.question(`Enter ${labelToShow} : `);

    rl.close();

    return tableName;
};

const main = async (inNarrationStep) => {
    let {
        templatePath,
        defaultRouteToHook,
        fileType,
        inputsFromUser = {},
        nextSteps
    } = getPaths(inNarrationStep);

    if (defaultRouteToHook) {
        inputsFromUser.raka = defaultRouteToHook;
        inputsFromUser.poka = defaultRouteToHook;
    }

    for (const key of Object.keys(inputsFromUser)) {
        if (key === "raka" || key === "poka") {
            continue;
        }

        const labelToShow = inputsFromUser[key];
        const valueFromUser = await captureInput(labelToShow);

        inputsFromUser[key] = valueFromUser;
    }

    const fromCopy = createFolderCopyTemplate({
        source: templatePath,
        destination: defaultRouteToHook
    });

    if (fromCopy?.KTF) {
        fixAnyJs({
            inTargetPath: process.cwd(),
            inFileType: fileType,
            inValue: inputsFromUser.raka,
            OutValue: inputsFromUser.poka
        });

        process.stdout.write(
            JSON.stringify({
                success: true,
                nextCommand: `cd ${inputsFromUser.raka}`,
                nextSteps
            }) + "\n"
        );
    }
};

export default main;