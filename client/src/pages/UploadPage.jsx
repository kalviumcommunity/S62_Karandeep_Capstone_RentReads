import React, { useState } from 'react';
import Navbar from '../components/NavBar.jsx'; // adjust path as needed

const UploadBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [coverImage, setCoverImage] = useState(null);

  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setCoverImage(URL.createObjectURL(file));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f4edff] to-white flex flex-col">
      <Navbar />

      <div className="px-10 py-10">
        <h1 className="text-3xl font-bold mb-10">Upload Book</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Upload Form */}
          <div className="col-span-2 bg-white rounded-xl shadow-md p-8 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Book Title*</label>
              <input
                type="text"
                placeholder="Enter the title of the book"
                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Author*</label>
              <input
                type="text"
                placeholder="Enter the author's name"
                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Genre*</label>
              <select className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700">
                <option value="">Select a genre</option>
                <option>Fiction</option>
                <option>Non-Fiction</option>
                <option>Science</option>
                <option>Romance</option>
                <option>Biography</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                rows={4}
                placeholder="Enter a brief description of the book"
                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Upload PDF*</label>
              <div className="mt-1 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50">
                <input type="file" accept="application/pdf" className="hidden" id="pdfUpload" />
                <label htmlFor="pdfUpload" className="block text-sm text-gray-600 cursor-pointer">
                  📄 Click to upload PDF<br />
                  <span className="text-xs text-gray-400">PDF only, max 100MB</span>
                </label>
              </div>
            </div>

            {/* Styled Cover Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Upload Cover Image*</label>
              <label
                htmlFor="coverUpload"
                className="block w-full h-48 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer flex flex-col items-center justify-center text-gray-500 hover:bg-gray-50 transition"
              >
                {coverImage ? (
                  <img src={coverImage} alt="Cover Preview" className="w-full h-full object-cover rounded-md" />
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M4 3a2 2 0 00-2 2v2h2V5h12v2h2V5a2 2 0 00-2-2H4z" />
                      <path fillRule="evenodd" d="M3 9a1 1 0 011-1h12a1 1 0 011 1v7a2 2 0 01-2 2H5a2 2 0 01-2-2V9zm10.707 3.707a1 1 0 00-1.414-1.414L10 13.586l-1.293-1.293a1 1 0 00-1.414 1.414L10 16.414l3.707-3.707z" clipRule="evenodd" />
                    </svg>
                    <p className="mt-2 font-medium">Click to upload cover image</p>
                    <p className="text-sm text-gray-400">JPG, PNG or GIF, max 5MB</p>
                  </>
                )}
              </label>
              <input
                type="file"
                accept="image/*"
                id="coverUpload"
                onChange={handleCoverImageChange}
                className="hidden"
              />
            </div>
          </div>

          {/* Book Preview */}
          <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center justify-start text-center">
            <h2 className="text-lg font-semibold mb-4">Book Preview</h2>
            <div className="w-40 h-56 bg-gray-100 border border-dashed border-gray-300 rounded-lg flex items-center justify-center mb-4">
              {coverImage ? (
                <img src={coverImage} alt="Cover Preview" className="w-full h-full object-cover rounded-lg" />
              ) : (
                <span className="text-gray-400 text-4xl">📷</span>
              )}
            </div>
            <p className="font-bold text-gray-800">{title || "Book Title"}</p>
            <p className="text-gray-500">{author || "Author Name"}</p>
            <p className="text-xs mt-4 text-gray-500">
              By uploading, you confirm that you have the right to share this book and agree to our{' '}
              <a href="#" className="text-purple-600 underline">terms of service</a>.
            </p>
          </div>
        </div>

        {/* Upload Button */}
        <div className="mt-10 flex justify-center">
          <button
            className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-md transition flex items-center space-x-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M16 12l-4-4m0 0l-4 4m4-4v12" />
            </svg>
            <span>Upload Book</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadBook;