const express = require("express");
const router = express.Router();
const { createApplicant } = require("../controllers/applicantController");

router.post("/applicants", createApplicant);

module.exports = router;
