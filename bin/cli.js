#!/usr/bin/env node

import getKnowledge from "discover-from-knowledge";

import { narrationJson as getNarrationJson } from "pattern-collector-base-files";

import getLatestVersion from "./core/getLatestVersion.js";
import loadRunner from "./core/loadRunner.js";

import noArgs from "./forCli/noArgs.js";
import singleArg from "./forCli/singleArg.js";

const main = async () => {
    const args = process.argv.slice(2);

    const version = getLatestVersion();

    switch (args.length) {
        case 0:
            noArgs();

            break;
        case 1:
            singleArg(args[0]);

            break;

        default:
            break;
    };

    //   await runner.default(process.cwd(), args[0])
};

main().catch((error) => {
    console.error(`\x1b[31mRuntime Error: ${error.message}\x1b[0m`);
    process.exit(1);
});