import express from 'express';

import { router as routerFrompurchases } from './purchases/routes.js';

const router = express.Router()

router.use("/purchases", routerFrompurchases);

export { router };