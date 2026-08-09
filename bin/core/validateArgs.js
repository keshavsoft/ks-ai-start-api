import fs from "node:fs";

const validateArgs = ({ raka, poka, toPath }) => {
    if (!raka || !poka) {
        throw new Error(
            "Both raka and poka arguments are required."
        );
    }

    if (!fs.existsSync(toPath)) {
        throw new Error(
            `Target directory "${toPath}" does not exist.`
        );
    }
};

export default validateArgs;