import express from "express";
import userAuth from "../middleware/authMiddleware.js";
import {
  createJob,
  deleteJob,
  getJobById,
  getJobPosts,
  updateJob,
} from "../controllers/jobControllers.js";

const router = express.Router();

// POST JOB
router.post("/upload-job", userAuth, createJob);

// IPDATE JOB
router.put("/update-job/:jobId", userAuth, updateJob);

// GET JOB POST
router.get("/find-jobs", getJobPosts);
router.get("/get-job-detail/:id", getJobById);

// DELETE JOB POST
router.delete("/delete-job/:id", userAuth, deleteJob);

export default router;