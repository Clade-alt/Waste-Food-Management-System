const express = require('express');
const router = express.Router();
const msgSchema = require('../models/msgSchema');
const donationSchema = require('../models/donationSchema');
const foodreqSchema = require('../models/foodreqSchema');
const industrypSchema = require('../models/industrypSchema');

// Route to retrieve all messages from the database
router.get('/messages', async (req, res) => {
  try {
    const messages = await msgSchema.find();
    res.json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/data', async (req, res) => {
  try {
    // Retrieve the data from the database or any other source
    const data = [
      { label: 'Label 1', donations: 10 },
      { label: 'Label 2', donations: 20 },
      // Add more data objects as needed
    ];

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;