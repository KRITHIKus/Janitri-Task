const express = require("express");
const { addPatient, getPatient } = require("../controllers/patientController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, addPatient);

router.get("/:id", protect, getPatient);

module.exports = router;
