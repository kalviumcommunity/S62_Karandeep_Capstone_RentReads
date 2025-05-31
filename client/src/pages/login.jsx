import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Send a POST request to the backend
      const response = await axios.post('http://localhost:8080/users/login', {
        email,
        password,
      });

      // If successful, save the token and redirect to the dashboard
      localStorage.setItem('token', response.data.token);
      alert('Login successful!');
      navigate('/dashboard'); // Redirect to a dashboard or home page
    } catch (err) {
      // Handle errors
      setError(err.response?.data?.error || 'Invalid email or password.');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-12 lg:px-8">
      <div className="w-full max-w-md">
        <h2 className="mt-6 text-center text-2xl font-bold tracking-tight text-gray-900">
          Log in to your account
        </h2>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
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
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-indigo-500 focus:outline-indigo-600"
          >
            Log in
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-500">
          Not Registered?{' '}
          <a href="/register" className="font-semibold text-indigo-600 hover:text-indigo-500">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}