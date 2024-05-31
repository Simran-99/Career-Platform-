const express = require("express");
const router = express.Router();
const { createEmployer } = require("../controllers/employerController");

router.post("/employers", createEmployer);

module.exports = router;
