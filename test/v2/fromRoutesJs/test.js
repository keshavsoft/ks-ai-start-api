import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

import runSync from "../../../index.js";

const fromNpm = runSync({
    raka: "v1", poka: "v1111111111",
    toPath: __dirname,
});

console.log("aaaaaa : ", fromNpm);
