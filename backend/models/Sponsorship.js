const mongoose = require("mongoose");

const SponsorshipSchema = new mongoose.Schema({
  sponsorName: {
    type: String,
    required: true
  },
  dealTitle: {
    type: String,
    required: true
  },
  dealAmount: {
    type: Number,
    required: true
  },
  startDate: {
    type: Date,
    default: Date.now
  },
  endDate: {
    type: Date
  },
  status: {
    type: String,
    enum: ["pending", "active", "completed", "cancelled"],
    default: "pending"
  }
});

module.exports = mongoose.model("Sponsorship", SponsorshipSchema);
