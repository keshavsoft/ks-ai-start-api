import path from "node:path";

const parsePositionals = (args) => {
    const positionals = [];

    for (let i = 0; i < args.length; i++) {
        const arg = args[i];

        if (arg.startsWith("-")) {
            if (
                arg === "--alterArray" &&
                i + 1 < args.length &&
                !args[i + 1].startsWith("-")
            ) {
                i++;
            }

            continue;
        }

        positionals.push(arg);
    }

    return {
        raka: positionals[0],
        poka: positionals[1],
        toPath: positionals[2]
            ? path.resolve(positionals[2])
            : process.cwd()
    };
};

export default parsePositionals;