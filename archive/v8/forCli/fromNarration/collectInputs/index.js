import captureInput from "./captureInput.js";

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
        };

        const labelToShow = inputsFromUser[key];

        if (key === "tableName") {
            const fromCapture = await captureInput(labelToShow);
            inputsFromUser[key] = fromCapture;
            inputsFromUser.raka = fromCapture;
            inputsFromUser.poka = fromCapture;
        } else {
            inputsFromUser[key] = await captureInput(labelToShow);
        };
    };

    return {
        inputsFromUser,
        defaultRouteToHook
    };
};

export default collectInputs;