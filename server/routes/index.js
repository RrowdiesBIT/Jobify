import express from "express";

import authRoute from "./authRoutes.js"
import userRoute from "./userRoutes.js"
import companyRoute from "./companyRoutes.js"
import jobRoute from "./jobRoutes.js"

const router = express.Router();

const path = "/api-v1/";

router.use(`${path}auth`,authRoute); //api-v1/auth/
router.use(`${path}user`,userRoute); //api-v1/user/
router.use(`${path}company`,companyRoute) //api-v1/company/
router.use(`${path}jobs`,jobRoute) //api-v1/jobs/

export default router;