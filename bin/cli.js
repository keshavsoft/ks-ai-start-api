#!/usr/bin/env node
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

import { createRequire } from "module";
import getLatestVersion from "./core/getLatestVersion.js";

const require = createRequire(import.meta.url);

const main = () => {
    const args = process.argv.slice(2);
    const v = getLatestVersion();
    // console.log("22222222 : ", v, args);
    switch (args.length) {
        case 0:
            // noArgs();
            const mod = require(`./${v}/forCli/noArgs.js`);

            mod.default();

            break;
        case 1:
            const mod1 = require(`./${v}/forCli/singleArg.js`);

            return mod1.default(args[0]);

            break;

        default:
            break;
    };
};

main();