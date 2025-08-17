const express = require("express");
const router = express.Router();
const Sponsorship = require("../models/Sponsorship");

// POST /api/sponsorships
// Add a new sponsorship deal
router.post("/", async (req, res) => {
  try {
    const { sponsorName, dealTitle, dealAmount } = req.body;

    const sponsorship = new Sponsorship({
      sponsorName,
      dealTitle,
      dealAmount,
      status: "pending", // default status
      startDate: new Date()
    });

    const savedDeal = await sponsorship.save();
    res.json(savedDeal);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// GET /api/sponsorships
// Fetch all sponsorship deals
router.get("/", async (req, res) => {
  try {
    const deals = await Sponsorship.find();
    res.json(deals);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
