const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./Routes/users.routes');
const rentalRoutes = require('./Routes/rental.routes');
const bookRoutes = require('./Routes/books.routes'); 

dotenv.config({ path: './config/.env' });

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB:', err));

app.use('/users', userRoutes); // User-related routes
app.use('/rentals', rentalRoutes); // Rental-related routes
app.use('/books', bookRoutes); // Book-related routes

app.get('/', (req, res) => {
  res.send('Welcome to the RentReads API');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});