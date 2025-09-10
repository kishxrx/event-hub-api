// models/Registration.js
const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema(
  {
    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      required: true,
    },
    userName: { type: String, required: true },
    userEmail: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Registration", registrationSchema);