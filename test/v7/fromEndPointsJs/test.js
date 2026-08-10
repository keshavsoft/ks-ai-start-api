import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

import { runSync } from "../../../index.js";

const fromNpm = runSync({
    inFileType: "fromEndPointsJs",
    folderName: "showAll",
    toPath: __dirname,
    inTableName: "tab1"
});

console.log("aaaaaa : ", fromNpm);
