const express = require('express');
const router = express.Router();
const Rental = require('../Models/rental.schema');  
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

// POST: Create a new rental
router.post('/', async (req, res) => {
    const { userId, bookId } = req.body;
  
    if (!userId || !bookId) {
      return res.status(400).json({ error: 'User ID and Book ID are required' });
    }
  
    try {
      const newRental = new Rental({
        userId,
        bookId,
        rentedAt: new Date(),
        lastOpenedAt: new Date()
      });
  
      await newRental.save();
      res.status(201).json(newRental);
    } catch (err) {
      res.status(500).json({ error: 'Failed to create rental' });
    }
  });
  
// PUT: Update a rental (e.g., to mark it as returned)
router.put('/:id', async (req, res) => {
  const { returned } = req.body;

  if (returned === undefined) {
    return res.status(400).json({ error: 'Returned status is required' });
  }

  try {
    const rental = await Rental.findByIdAndUpdate(req.params.id, { returned }, { new: true });
    if (!rental) return res.status(404).json({ error: 'Rental not found' });
    res.json(rental);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update rental' });
  }
});

module.exports = router;