#!/usr/bin/env node

import parseArgs from "./core/parseArgs/parseArgs.js";
import validateArgs from "./core/validateArgs.js";
import showHelp from "./core/showHelp.js";
import getLatestVersion from "./core/getLatestVersion.js";
import loadRunner from "./core/loadRunner.js";
import runRunner from "./core/runRunner.js";

const main = async () => {
    const args = parseArgs();
    console.log("---------- : ", args);

    if (args.help) {
        showHelp();
        return;
    }

    if (args.version) {
        console.log(args.packageVersion);
        return;
    }

    validateArgs(args);

    const version = getLatestVersion();
    const runner = await loadRunner(version);


    const output = await runRunner(runner, args);

    console.log(JSON.stringify(output, null, 2));
};

main().catch((error) => {
    console.error(`\x1b[31mRuntime Error: ${error.message}\x1b[0m`);
    process.exit(1);
});