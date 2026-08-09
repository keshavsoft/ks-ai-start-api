#!/usr/bin/env node
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

import { createRequire } from "module";
import getLatestVersion from "./core/getLatestVersion.js";

const require = createRequire(import.meta.url);

// import noArgs from "./v3/forCli/noArgs.js";
// import singleArg from "./v3/forCli/singleArg.js";

const main = () => {
    const args = process.argv.slice(2);

    console.log("hhhhhhhhh : ", args, __dirname);


    // const version = getLatestVersion();

    switch (args.length) {
        case 0:
            // noArgs();

            break;
        case 1:
            const v = getLatestVersion();

            const mod = require(`./${v}/forCli/singleArg.js`);

            return mod.default(args[0]);

            // singleArg(args[0]);

            break;

        default:
            break;
    };

    //   await runner.default(process.cwd(), args[0])
};

main();