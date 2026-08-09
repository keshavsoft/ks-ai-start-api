import express from 'express';

import { router as routerFromtab1 } from './tab1/end-points.js';

const router = express.Router()

router.use("/tab1", routerFromtab1);

export { router };