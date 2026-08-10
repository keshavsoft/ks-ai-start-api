#!/usr/bin/env node

import fs from "fs";

const startFunc = ({ source, destination }) => {
    fs.mkdirSync(destination, { recursive: true });

    fs.cpSync(source, destination, { recursive: true });

    return {
        KTF: true
    };
};

export default startFunc;