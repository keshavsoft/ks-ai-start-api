import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const pkg = JSON.parse(
    fs.readFileSync(
        path.join(__dirname, "..", "..", "package.json"),
        "utf8"
    )
);

const showHelp = () => {
    console.log(`
template-provider-with-discovery CLI v${pkg.version}

Usage:
  npx template-provider-with-discovery <raka> <poka> [toPath]

Arguments:
  raka            Value to use for configuration mapping
  poka            Output value to write
  toPath          Optional target path

Options:
  -h, --help      Show this help message
  -v, --version   Show CLI version
  --alterArray    JSON string representing array of key/value pairs
`);
};

export default showHelp;