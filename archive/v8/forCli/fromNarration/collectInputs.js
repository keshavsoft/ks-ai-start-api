import readline from "node:readline/promises";
import {
    stdin as input,
    stderr as output
} from "node:process";

const captureInput = async (labelToShow) => {
    const rl = readline.createInterface({
        input,
        output
    });

    const value = await rl.question(`Enter ${labelToShow} : `);

    rl.close();

    return value;
};

const collectInputs = async ({
    inputsFromUser = {},
    defaultRouteToHook
}) => {

    if (defaultRouteToHook) {
        inputsFromUser.raka = defaultRouteToHook;
        inputsFromUser.poka = defaultRouteToHook;
    }

    for (const key of Object.keys(inputsFromUser)) {
        if (key === "raka" || key === "poka") {
            continue;
        }

        const labelToShow = inputsFromUser[key];

        inputsFromUser[key] = await captureInput(labelToShow);
    }

    return {
        inputsFromUser,
        defaultRouteToHook
    };
};

export default collectInputs;