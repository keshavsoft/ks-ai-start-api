const parseAlterArray = (args) => {
    const prefix = "--alterArray=";

    const option = args.find((arg) =>
        arg.startsWith(prefix)
    );

    if (option) {
        try {
            return JSON.parse(
                option.slice(prefix.length)
            );
        } catch {
            throw new Error(
                "--alterArray has invalid JSON format."
            );
        }
    }

    const index = args.indexOf("--alterArray");

    if (index !== -1 && index + 1 < args.length) {
        try {
            return JSON.parse(args[index + 1]);
        } catch {
            throw new Error(
                "--alterArray has invalid JSON format."
            );
        }
    }

    return undefined;
};

export default parseAlterArray;