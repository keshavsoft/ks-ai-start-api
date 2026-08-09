import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

import runSync from "../../../index.js";
const tableName = "purchases";

const fromNpm = runSync({
    raka: tableName, poka: tableName,
    toPath: __dirname,
    alterArray: [
        { "key": "<TABLE_NAME>", "value": tableName }
    ]
});

console.log("aaaaaa : ", fromNpm);
