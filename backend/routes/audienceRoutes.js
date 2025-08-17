const express = require("express");
const router = express.Router();
const Audience = require("../models/Audience");

// GET all audience segments
router.get("/", async (req, res) => {
  try {
    const segments = await Audience.find().sort({ createdAt: -1 });
    res.json(segments);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// POST new audience segment
router.post("/", async (req, res) => {
  try {
    const { segmentName, ageGroup, region } = req.body;

    const newSegment = new Audience({ segmentName, ageGroup, region });
    const savedSegment = await newSegment.save();
    res.json(savedSegment);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
