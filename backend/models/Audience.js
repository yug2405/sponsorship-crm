// backend/models/Audience.js
const mongoose = require("mongoose");

const AudienceSchema = new mongoose.Schema({
  segmentName: { type: String, required: true },
  ageGroup: { type: String, required: true },
  region: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Audience", AudienceSchema);
