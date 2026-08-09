import discover from "discover-from-knowledge";
import fixAnyJs from "express-fix-any-js";

import getSourcePath from "./getSourcePath.js";
import getDestinationPath from "./getDestinationPath.js";
import copyTemplate from "./copyTemplate.js";

export default ({ raka, poka, toPath, alterArray }) => {
    const discovery = discover(toPath);

    if (!discovery.success) {
        return {
            success: false,
            discovery,
            message: "Unable to discover project type."
        };
    }

    const fileType = discovery.discovery.fileType;

    const source = getSourcePath({
        inFileType: fileType
    });

    const destination = getDestinationPath(toPath, raka);

    const templateCopied = copyTemplate(source, destination);

    let modification;

    if (templateCopied) {
        modification = fixAnyJs({
            inTargetPath: toPath,
            alterArray,
            inFileType: fileType,
            inValue: raka,
            OutValue: poka
        });
    }

    return {
        success: true,
        discovery,
        template: {
            source,
            destination,
            copied: templateCopied
        },
        modification
    };
};