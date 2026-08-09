import updateAppJs from "express-fix-any-js";

const updateAppConfiguration = ({ toPath, inFileType, raka, poka }) => {
    return updateAppJs({
        inTargetPath: toPath,
        inFileType: "fromAppJs",
        inValue: raka, OutValue: poka
    });
};

export default updateAppConfiguration;
