const mongoose = require('mongoose');

const rentalSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  bookId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
    required: true,
  },
  rentedAt: {
    type: Date,
    default: Date.now,
  },
  lastOpenedAt: {
    type: Date,
    default: Date.now,
  },
  returned: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Rental', rentalSchema);