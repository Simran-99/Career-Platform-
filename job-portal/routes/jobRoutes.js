const express = require("express");
const router = express.Router();
const {
  createJob,
  getAllJobs,
  applyJob,
} = require("../controllers/jobController");
const { protect } = require("../middleware/authMiddleware");

router.post("/jobs", protect, createJob);

router.get("/jobs", getAllJobs);

router.post("/jobs/apply", protect, applyJob);

module.exports = router;
