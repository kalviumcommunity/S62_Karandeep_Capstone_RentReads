const express = require('express');
const router = express.Router();

// GET all rentals
router.get('/', async (req, res) => {
  try {
    const rentals = await Rental.find().populate('bookId userId');
    res.json(rentals);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch rentals' });
  }
});

// GET rentals for a specific user
router.get('/user/:userId', async (req, res) => {
  try {
    const rentals = await Rental.find({ userId: req.params.userId }).populate('bookId');
    res.json(rentals);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch user rentals' });
  }
});

module.exports = router;