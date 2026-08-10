import fixAnyJs from "express-fix-any-js";

const ifTableNamePresent = (inputsFromUser) => {
    if (!("tableName" in inputsFromUser)) {
        return false;
    };

    const tableName = inputsFromUser?.tableName;

    const alterArray = [
        { "key": "<TABLE_NAME>", "value": tableName }
    ];

    // inputsFromUser.raka = tableName;
    // inputsFromUser.poka = tableName;

    return alterArray;
};

const applyFix = ({
    fileType,
    inInputsFromUser
}) => {
    // console.log("jjjjjjjjj : ", inputsFromUser);

    const alterArray = ifTableNamePresent(inInputsFromUser);

    if (alterArray) {

        return fixAnyJs({
            inTargetPath: process.cwd(),
            inFileType: fileType,
            inValue: inInputsFromUser.raka,
            OutValue: inInputsFromUser.poka,
            alterArray
        });

    } else {
        return fixAnyJs({
            inTargetPath: process.cwd(),
            inFileType: fileType,
            inValue: inInputsFromUser.raka,
            OutValue: inInputsFromUser.poka
        });

    };
};

export default applyFix;