const express = require('express');
const router = express.Router();

// GET all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch books' });
  }
});

// GET a single book by ID
router.get('/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching book' });
  }
});

// GET search (by title or author)
router.get('/search/q', async (req, res) => {
  const { q } = req.query;
  try {
    const books = await Book.find({
      $or: [
        { title: new RegExp(q, 'i') },
        { author: new RegExp(q, 'i') }
      ]
    });
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: 'Search failed' });
  }
});

// POST: Add a new book
router.post('/', async (req, res) => {
    const { title, author, pdfUrl, coverUrl } = req.body;
  
    if (!title || !author || !pdfUrl) {
      return res.status(400).json({ error: 'Title, author, and PDF URL are required' });
    }
  
    try {
      const newBook = new Book({ title, author, pdfUrl, coverUrl });
      await newBook.save();
      res.status(201).json(newBook);
    } catch (err) {
      res.status(500).json({ error: 'Failed to add book' });
    }
  });

module.exports = router;