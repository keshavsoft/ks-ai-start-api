import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

import runSync from "../../../index.js";
console.log("11111111 : ", __dirname);

const fromNpm = runSync({
    raka: "api", poka: "api",
    inFileType: "fromAppJs",
    toPath: __dirname
});

console.log("aaaaaa : ", fromNpm);
