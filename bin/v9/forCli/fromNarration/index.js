import getPaths from "./getPaths.js";
// import collectInputs from "./collectInputs.js";
import createTemplate from "./createTemplate.js";
import applyFix from "./applyFix.js";
import sendResult from "./sendResult.js";
import collectInputs from "./collectInputs/index.js";

const main = async (inNarrationStep) => {
    const paths = getPaths(inNarrationStep);

    const {
        inputsFromUser,
        defaultRouteToHook
    } = await collectInputs(paths);

    const fromCopy = createTemplate({
        templatePath: paths.templatePath,
        defaultRouteToHook
    });

    if (!fromCopy?.KTF) {
        return;
    };

    applyFix({
        fileType: paths.fileType,
        inInputsFromUser: inputsFromUser
    });

    sendResult({
        inputsFromUser,
        nextSteps: paths.nextSteps
    });
};

export default main;