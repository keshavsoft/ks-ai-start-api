import fixAnyJs from "express-fix-any-js";

const applyFix = ({
    fileType,
    inputsFromUser
}) => {
    return fixAnyJs({
        inTargetPath: process.cwd(),
        inFileType: fileType,
        inValue: inputsFromUser.raka,
        OutValue: inputsFromUser.poka
    });
};

export default applyFix;