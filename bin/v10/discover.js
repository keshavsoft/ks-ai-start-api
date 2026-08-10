import discover from "discover-from-knowledge";
import { outputStructureJson as getOutputStructureJson } from "pattern-collector-base-files";

export default (toPath) => {
    const discovery = discover(toPath);

    if (!discovery.success) {
        return {
            success: false,
            discovery,
            message: "Unable to discover project type."
        };
    };

    const fileType = discovery.discovery.fileType;

    let outputStructureJson = getOutputStructureJson();

    outputStructureJson.fileType = fileType;
    outputStructureJson.KTF = true;

    return outputStructureJson;
};