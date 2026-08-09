import { createRequire } from "module";

const require = createRequire(import.meta.url);

export default function loadRunner(version) {
    const mod = require(`../${version}/start.js`);

    if (typeof mod.default !== "function") {
        throw new Error(`Invalid start.js in ${version}`);
    }

    return mod.default;
};