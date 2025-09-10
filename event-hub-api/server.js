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
mongoose.connect("mongodb+srv://kishxrx:eventhubb@eventhub-cluster.g56inn5.mongodb.net/?retryWrites=true&w=majority&appName=Eventhub-Cluster", {
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