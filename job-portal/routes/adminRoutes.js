const express = require("express");
const router = express.Router();
const { createAdmin } = require("../controllers/adminController");
const { protect } = require("../middleware/authMiddleware");

router.post("/admins", createAdmin);

module.exports = router;
