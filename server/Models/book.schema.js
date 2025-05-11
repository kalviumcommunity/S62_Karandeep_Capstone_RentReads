const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  pdfUrl: {
    type: String, // URL or file path for the PDF
    required: true,
  },
  coverUrl: {
    type: String, // Optional URL for the book cover image
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Book', bookSchema);