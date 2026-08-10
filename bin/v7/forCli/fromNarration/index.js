#!/usr/bin/env node

import fixAnyJs from "express-fix-any-js";
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

import createFolderCopyTemplate from "./createFolderCopyTemplate.js";
import getPaths from "./getPaths.js";

const captureInput = async (labelToShow) => {
    const rl = readline.createInterface({ input, output });

    const tableName = await rl.question(`Enter ${labelToShow} : `);

    rl.close();

    return await tableName;
};

const main = async (inNarrationStep) => {
    let { templatePath, defaultRouteToHook, fileType, inputsFromUser = {} } = getPaths(inNarrationStep);

    // const tableName = await captureInput("Enter Table Name");

    if (defaultRouteToHook) {
        inputsFromUser.raka = defaultRouteToHook;
        inputsFromUser.poka = defaultRouteToHook;
    };

    // console.log("inputsFromUser : ", inputsFromUser);

    Object.keys(inputsFromUser)?.forEach(async (key) => {
        if (key === "raka" || key === "poka") {
            return;
        };

        const labelToShow = inputsFromUser?.[key];
        const valueFromUser = await captureInput(labelToShow);
        inputsFromUser[key] = valueFromUser;
    });

    // defaultRouteToHook = tableName;

    // const alterArray = [
    //     { "key": "<TABLE_NAME>", "value": tableName }
    // ];

    // console.log(templatePath, defaultRouteToHook, fileType);
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

        // SUCCESS RESULT -> stdout
        process.stdout.write(
            JSON.stringify({
                success: true,
                nextCommand: `cd ${inputsFromUser.raka}`
            }) + "\n"
        );

    };
};

export default main;