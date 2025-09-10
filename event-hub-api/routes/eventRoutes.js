const express = require("express");
const router = express.Router();
const eventControllers = require("../controllers/eventControllers");

// Routes
router.post("/", eventControllers.createEvent);      // Create new event
router.get("/", eventControllers.getAllEvents);      // Get all events
router.get("/:id", eventControllers.getEventById);   // Get single event by ID
router.put("/:id", eventControllers.updateEvent);    // Update event
router.delete("/:id", eventControllers.deleteEvent); // Delete event

module.exports = router;