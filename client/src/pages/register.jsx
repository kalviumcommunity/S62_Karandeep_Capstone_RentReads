import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      // Send a POST request to the backend
      const response = await axios.post('http://localhost:8080/users/register', {
        name,
        email,
        password,
      });

      // If successful, display a success message and redirect to login
      setSuccess('Registration successful! Redirecting to login...');
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      // Handle errors
      setError(err.response?.data?.error || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-12 lg:px-8">
      <div className="w-full max-w-md">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-2xl font-bold text-black-600">
            <span role="img" aria-label="book">📘</span>
            <span>RentReads</span>
          </div>
        </div>
        <h2 className="mt-6 text-center text-2xl font-bold tracking-tight text-gray-900">
          Create your account
        </h2>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-900">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block w-full rounded-md border border-black px-3 py-1.5 text-base text-gray-900 placeholder-gray-400 focus:outline-indigo-600"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full rounded-md border border-black px-3 py-1.5 text-base text-gray-900 placeholder-gray-400 focus:outline-indigo-600"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-900">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full rounded-md border border-black px-3 py-1.5 text-base text-gray-900 placeholder-gray-400 focus:outline-indigo-600"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-500 text-sm">{success}</p>}
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-indigo-500 focus:outline-indigo-600"
          >
            Register
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-500">
          Already registered?{' '}
          <a href="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}