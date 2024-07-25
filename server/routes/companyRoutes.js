import express, { Router } from "express";
import { rateLimit } from "express-rate-limit";
import {
  getCompanies,
  getCompanyById,
  getcompanyJobListing,
  getCompanyProfile,
  register,
  signIn,
  updateCompanyProfile,
} from "../controllers/companies.js";
import userAuth from "../middleware/authMiddleware.js";

const router = express.Router();

//ip rate limit
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// REGISTER
router.post("/register", limiter, register);

// LOGIN
router.post("/login", limiter, signIn);

// GET DATA
router.post("/get-company-profile", userAuth, getCompanyProfile);
router.post("/get-company-joblisting", userAuth, getcompanyJobListing);
router.get("/", getCompanies);
router.get("/get-company/:id", getCompanyById);


//GET COMPANIES DATA
// router.get("/getdata",getCompanyData);


// UPDATE DATA
router.put("/update-company", userAuth, updateCompanyProfile);

export default router;
