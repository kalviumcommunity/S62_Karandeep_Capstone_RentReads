import React from 'react';
import { Edit, Trash } from 'lucide-react';
import Navbar from '../components/NavBar'; //

const Dashboard = () => {
  const uploadedBooks = [
    {
      title: 'JavaScript: The Good Parts',
      author: 'Douglas Crockford',
      rentals: 12,
      earnings: 36,
      image: '/images/js-book.jpg',
    },
    {
      title: 'Designing Data-Intensive Applications',
      author: 'Martin Kleppmann',
      rentals: 8,
      earnings: 24,
      image: '/images/data-apps.jpg',
    },
    {
      title: 'Building Microservices',
      author: 'Sam Newman',
      rentals: 5,
      earnings: 15,
      image: '/images/microservices.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="p-8">
        <h1 className="text-3xl font-bold mb-1">Dashboard</h1>
        <p className="text-gray-500 mb-6">Manage your books and activities</p>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-md flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Uploads</p>
              <h2 className="text-2xl font-bold">3</h2>
              <p className="text-xs text-green-600 mt-1">↑ 12% Since last month</p>
            </div>
            <div className="text-green-500 bg-green-100 p-2 rounded-full">📘</div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Active Rentals</p>
              <h2 className="text-2xl font-bold">2</h2>
              <p className="text-xs text-gray-500 mt-1">Next expiration in 1 day</p>
            </div>
            <div className="text-yellow-500 bg-yellow-100 p-2 rounded-full">📖</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg font-medium shadow-sm">
            My Uploads
          </button>
          <button className="px-4 py-2 text-gray-500 hover:text-black">My Rentals</button>
          <button className="px-4 py-2 text-gray-500 hover:text-black">Activity Feed</button>
        </div>

        {/* Upload Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {uploadedBooks.map((book, index) => (
            <div key={index} className="bg-white p-4 rounded-xl shadow-md flex flex-col">
              <img
                src={book.image}
                alt={book.title}
                className="h-40 w-full object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold truncate">{book.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{book.author}</p>
              <p className="text-sm text-gray-600 mb-4">
                {book.rentals} rentals • ${book.earnings} earned
              </p>
              <div className="flex justify-between mt-auto pt-2 border-t border-gray-100">
                <button className="text-sm text-gray-700 hover:text-purple-600 font-medium flex items-center gap-1">
                  <Edit className="w-4 h-4" />
                  Edit
                </button>
                <button className="text-sm text-red-600 hover:text-red-800 font-medium flex items-center gap-1">
                  <Trash className="w-4 h-4" />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;