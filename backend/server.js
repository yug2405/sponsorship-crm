const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json()); // To parse JSON in requests
app.use(cors()); // To allow frontend requests

// Test route
app.get("/", (req, res) => {
  res.send("Sponsorship CRM Backend Running!");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const sponsorshipRoutes = require("./routes/sponsorshipRoutes");
app.use("/api/sponsorships", sponsorshipRoutes);

// server.js
const audienceRoutes = require("./routes/audienceRoutes");
app.use("/api/audience", audienceRoutes);

