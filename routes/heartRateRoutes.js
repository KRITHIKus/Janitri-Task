const express = require("express");
const { addHeartRate, getHeartRates } = require("../controllers/heartRateController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, addHeartRate);

router.get("/:id", protect, getHeartRates);

module.exports = router;
