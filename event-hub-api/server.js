require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const eventRoutes = require("./routes/eventRoutes");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/events", eventRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Event Management API is running 🚀");
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

const registrationRoutes = require("./routes/registrationRoutes");

app.use("/api/registrations", registrationRoutes);