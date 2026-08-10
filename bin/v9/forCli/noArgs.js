#!/usr/bin/env node

import getKnowledge from "discover-from-knowledge";

import { narrationJson as getNarrationJson } from "pattern-collector-base-files";

const main = () => {
    const fromKnowledge = getKnowledge(process.cwd());
    const fileType = fromKnowledge?.discovery?.fileType;
    const narrationJson = getNarrationJson();

    const findNarration = narrationJson?.story.find(element => {
        return element?.fileNames.find(fileNameLoop => {
            return fileNameLoop === fileType;
        });
    });

    const filterNarrations = narrationJson?.story.filter(element => {
        return element?.fileNames.find(fileNameLoop => {
            return fileNameLoop === fileType;
        });
    });

    const returnNarrations = filterNarrations.map(element => {
        return element?.stepName;
    });

    // console.log("k1 : ", k1);

    // const stepToRun = findNarration?.stepName;

    // if (stepToRun) {
    //     console.log(`${stepToRun}`);
    // };

    if (returnNarrations) {
        console.log(`${returnNarrations}`);
    };

};

export default main;