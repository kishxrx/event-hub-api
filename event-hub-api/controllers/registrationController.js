// controllers/registrationController.js
const Event = require("../models/Events");
const Registration = require("../models/Registration");

// Register user for an event
exports.registerForEvent = async (req, res) => {
  try {
    const { eventId, userName, userEmail } = req.body;

    // Check if event exists
    const event = await Event.findById(eventId);
    if (!event) return res.status(404).json({ message: "Event not found" });

    // Check event capacity
    const count = await Registration.countDocuments({ event: eventId });
    if (count >= event.capacity) {
      return res.status(400).json({ message: "Event capacity reached" });
    }

    // Save registration
    const registration = new Registration({ event: eventId, userName, userEmail });
    await registration.save();

    res.status(201).json({ message: "Registered successfully", registration });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};