import {
    fileNamesJson as getFileNamesJson,
    outputStructureJson as getOutputStructureJson
} from "pattern-collector-base-files";

export default (inFileType) => {
    const fileNamesJson = getFileNamesJson();

    let outputStructureJson = getOutputStructureJson();

    if (!(inFileType in fileNamesJson)) {
        outputStructureJson.KReason = `Error : ${inFileType} is not a valid file type.`;
        return outputStructureJson;
    };

    outputStructureJson.fileTypeStory = fileNamesJson[inFileType];
    outputStructureJson.KTF = true;

    return outputStructureJson;
};