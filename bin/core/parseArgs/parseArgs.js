import parseFlags from "./for2Args/parseFlags.js";
import parseAlterArray from "./for2Args/parseAlterArray.js";
import parsePositionals from "./for2Args/parsePositionals.js";

const parseArgs = () => {
    const args = process.argv.slice(2);

    switch (args.length) {
        case 1:

            return {
                raka: args[0],
                poka: args[0],
                toPath: process.cwd()
            };

            break;
        case 2:
            return {
                ...parsePositionals(args),
                ...parseFlags(args),
                alterArray: parseAlterArray(args)
            };

            break;

        default:
            return {
                ...parsePositionals(args),
                ...parseFlags(args),
                alterArray: parseAlterArray(args)
            };

            break;
    };
};

export default parseArgs;