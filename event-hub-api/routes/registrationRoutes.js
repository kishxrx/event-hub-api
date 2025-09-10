const express = require("express");
const router = express.Router();
const registrationController = require("../controllers/registrationController");

// Register for an event
router.post("/", registrationController.registerForEvent);

module.exports = router;