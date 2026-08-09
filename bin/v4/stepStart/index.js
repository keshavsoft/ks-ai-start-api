import {
    fileNamesJson as getFileNamesJson,
    narrationJson as getNarrationJson
} from "pattern-collector-base-files";

import fixAnyJs from "express-fix-any-js";

import getSourcePath from "./getSourcePath.js";
import getDestinationPath from "./getDestinationPath.js";
import copyTemplate from "./copyTemplate.js";

export default ({ raka, poka, inNarrationStep, inFileNameKey }) => {
    const narrationJson = getNarrationJson();
    const fileNamesJson = getFileNamesJson();

    const findNarration = narrationJson?.story?.find(element => {
        return element?.stepName === inNarrationStep && element?.story?.includes(inFileNameKey);
    });

    console.log("lllllllll : ", findNarration);

    // const findNarration = narrationJson?.story?.find(element => {
    //     return element?.stepName === inNarrationStep;
    // });


    // const discovery = discover(toPath);

    return false;
};