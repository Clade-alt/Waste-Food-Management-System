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

router.get('/donations', async (req, res) => {
  try {
    const donations = await donationSchema.find();
    res.json(donations);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/food-requests', async (req, res) => {
  try {
    const foodRequests = await foodreqSchema.find();
    res.json(foodRequests);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/industry-purchases', async (req, res) => {
  try {
    const industryPurchases = await industrypSchema.find();
    res.json(industryPurchases);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;