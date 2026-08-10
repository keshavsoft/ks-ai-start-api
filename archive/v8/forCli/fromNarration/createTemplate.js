import createFolderCopyTemplate from "./createFolderCopyTemplate.js";

const createTemplate = ({
    templatePath,
    defaultRouteToHook
}) => {
    return createFolderCopyTemplate({
        source: templatePath,
        destination: defaultRouteToHook
    });
};

export default createTemplate;