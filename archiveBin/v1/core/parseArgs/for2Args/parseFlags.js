const parseFlags = (args) => ({
    help:
        args.includes("-h") ||
        args.includes("--help"),

    version:
        args.includes("-v") ||
        args.includes("--version")
});

export default parseFlags;