import updateAppJs from "express-fix-any-js";

const startFunc = ({ toPath, alterArray, inFileType }) => {
    return updateAppJs({
        inTargetPath: toPath,
        inFileType: "fromAppJs",
        alterArray
    });
};

export default startFunc;
