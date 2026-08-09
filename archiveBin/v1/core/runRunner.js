const runRunner = async (runner, args) => {
    const {
        raka,
        poka,
        toPath,
        alterArray
    } = args;

    return runner({
        raka,
        poka,
        toPath,
        alterArray
    });
};

export default runRunner;