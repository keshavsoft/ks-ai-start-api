#!/usr/bin/env node

import fixAnyJs from "express-fix-any-js";
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

import createFolderCopyTemplate from "./createFolderCopyTemplate.js";
import getPaths from "./getPaths.js";

const main = async (inNarrationStep) => {
    let { templatePath, defaultRouteToHook, fileType } = getPaths(inNarrationStep);

    const rl = readline.createInterface({ input, output });

    const tableName = await rl.question("Enter Table Name : ");

    // console.log("You entered:", answer);

    rl.close();

    defaultRouteToHook = tableName;

    const alterArray = [
        { "key": "<TABLE_NAME>", "value": tableName }
    ];

    // console.log(templatePath, defaultRouteToHook, fileType);
    const fromCopy = createFolderCopyTemplate({
        source: templatePath,
        destination: defaultRouteToHook
    });

    if (fromCopy?.KTF) {
        fixAnyJs({
            inTargetPath: process.cwd(),
            inFileType: fileType,
            inValue: defaultRouteToHook,
            OutValue: defaultRouteToHook,
            alterArray
        });

    };
};

export default main;