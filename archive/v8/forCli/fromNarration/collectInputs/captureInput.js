import readline from "node:readline/promises";
import {
    stdin as input,
    stderr as output
} from "node:process";

const startFunc = async (labelToShow) => {
    const rl = readline.createInterface({
        input,
        output
    });

    const value = await rl.question(`Enter ${labelToShow} : `);

    rl.close();

    return value;
};

export default startFunc;