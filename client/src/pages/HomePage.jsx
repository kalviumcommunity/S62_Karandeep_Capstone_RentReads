import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Upload } from 'lucide-react';
import Navbar from '../components/NavBar.jsx';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f4edff] to-white flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main className="flex flex-col-reverse md:flex-row items-center justify-between px-10 py-20">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            A place to rent, read, and trade books
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Access thousands of digital books instantly. Read anywhere, anytime, and share your own collection with others.
          </p>
          <div className="mt-6 flex space-x-4">
            <button
              onClick={() => navigate('/login')}
              className="bg-purple-500 text-white px-5 py-2 rounded-xl flex items-center gap-2 hover:bg-purple-600 transition"
            >
              📖 Start Reading
            </button>
            <button
              onClick={() => navigate('/upload')}
              className="bg-white border border-gray-300 px-5 py-2 rounded-xl flex items-center gap-2 hover:bg-gray-100 transition"
            >
              ⬆️ Upload a Book
            </button>
          </div>
        </div>

        <div className="relative w-[300px] h-[300px] mt-10 md:mt-0">
          <img src="/image.png" alt="Books" className="absolute top-0 left-0 w-40 h-28 rounded-xl shadow-lg object-cover rotate-[-5deg] z-10" />
          <img src="/image2.png" alt="Reading" className="absolute top-12 left-12 w-44 h-60 rounded-xl shadow-lg object-cover rotate-[5deg] z-20" />
          <img src="/images3.png" alt="Open Book" className="absolute top-24 left-6 w-48 h-32 rounded-xl shadow-lg object-cover rotate-[-10deg] z-40" />
        </div>
      </main>

      {/* How It Works */}
      <section className="text-center py-10">
        <h2 className="text-2xl font-bold mb-10">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-left">
            <div className="bg-purple-100 p-4 rounded-xl mb-4">
              <Upload className="text-purple-600" size={32} />
            </div>
            <h3 className="text-lg font-semibold">Upload Books</h3>
            <p className="text-gray-600 mt-2">
              Share your digital collection with our community. Upload PDFs and earn credits when others rent your books.
            </p>
          </div>
          <div className="flex flex-col items-center text-left">
            <div className="bg-blue-100 p-4 rounded-xl mb-4">
              <BookOpen className="text-blue-600" size={32} />
            </div>
            <h3 className="text-lg font-semibold">Rent Books</h3>
            <p className="text-gray-600 mt-2">
              Browse thousands of books and rent them for a fraction of the cost. Pay only for what you read.
            </p>
          </div>
          <div className="flex flex-col items-center text-left">
            <div className="bg-green-100 p-4 rounded-xl mb-4">
              <BookOpen className="text-green-600" size={32} />
            </div>
            <h3 className="text-lg font-semibold">Read Anywhere</h3>
            <p className="text-gray-600 mt-2">
              Access your rented books from any device. Our reader works on desktop, tablet, and mobile.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-500 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to start reading?</h2>
        <p className="text-lg mb-8 max-w-xl mx-auto">
          Join thousands of readers who are discovering new books every day. Upload your first book or start browsing our collection now.
        </p>
        <button
          onClick={() => navigate('/login')}
          className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-xl hover:bg-blue-100 transition"
        >
          Start Reading
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-white text-gray-700 py-12 px-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 max-w-7xl mx-auto">
          <div className="max-w-sm">
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="text-purple-500" />
              <span className="text-lg font-semibold text-purple-700">RentReads</span>
            </div>
            <p className="text-sm">
              RentReads is a platform where you can upload, rent, and read digital books. Join our community of book lovers and share your knowledge with the world.
            </p>
          </div>

          <div className="flex flex-wrap gap-20 justify-end text-sm">
            <div>
              <h4 className="font-bold mb-3">RESOURCES</h4>
              <ul className="space-y-2">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-3">LEGAL</h4>
              <ul className="space-y-2">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Copyright</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;