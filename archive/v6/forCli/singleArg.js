#!/usr/bin/env node

import fromNarration from "./fromNarration/index.js";

const main = (inSingleArg) => {
    console.log("inSingleArg :", inSingleArg);



    fromNarration(inSingleArg).then();
};

export default main;