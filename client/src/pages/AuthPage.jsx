import React, { useState } from 'react';
import { Eye, EyeOff, Book } from 'lucide-react';

const AuthPage = () => {
  const [tab, setTab] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Login state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Register state
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!loginEmail || !loginPassword) {
      alert('Please enter email and password');
      return;
    }

    try {
      setIsLoading(true);
      const res = await fetch('http://localhost:8080/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      });

      const data = await res.json();
      setIsLoading(false);

      if (!res.ok) {
        alert(data.error || 'Login failed');
        return;
      }

      alert('Login successful!');
      // localStorage.setItem('token', data.token);
      // Redirect to dashboard if needed
    } catch (err) {
      alert('Server error. Try again.');
      setIsLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!registerName || !registerEmail || !registerPassword || !acceptTerms) {
      alert('Please fill all fields and accept terms.');
      return;
    }

    try {
      setIsLoading(true);
      const res = await fetch('http://localhost:8080/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: registerName,
          email: registerEmail,
          password: registerPassword,
        }),
      });

      const data = await res.json();
      setIsLoading(false);

      if (!res.ok) {
        alert(data.error || 'Registration failed');
        return;
      }

      alert('Registration successful!');
      setTab('login'); // Switch to login after successful register
    } catch (err) {
      alert('Server error. Try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg">
        {/* Header */}
        <div className="text-center">
          <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Book className="h-6 w-6 text-indigo-500" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Welcome to RentReads</h1>
          <p className="text-sm text-gray-600 mt-1">Sign in to access your account or create a new one</p>
        </div>

        {/* Tab Switch */}
        <div className="flex items-center justify-center mt-6">
          <div className="bg-indigo-100 rounded-full flex w-full">
            <button
              className={`w-1/2 py-2 rounded-full transition font-medium ${
                tab === 'login'
                  ? 'bg-white text-indigo-700 shadow-sm'
                  : 'text-indigo-500 hover:text-indigo-600'
              }`}
              onClick={() => setTab('login')}
            >
              Login
            </button>
            <button
              className={`w-1/2 py-2 rounded-full transition font-medium ${
                tab === 'register'
                  ? 'bg-white text-indigo-700 shadow-sm'
                  : 'text-indigo-500 hover:text-indigo-600'
              }`}
              onClick={() => setTab('register')}
            >
              Register
            </button>
          </div>
        </div>

        {/* Login Form */}
        {tab === 'login' && (
          <form onSubmit={handleLogin} className="mt-6 space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                placeholder="youremail@example.com"
                className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium mb-1">Password</label>
                <span className="text-sm text-indigo-500 cursor-pointer hover:underline">Forgot password?</span>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-indigo-500 focus:ring-indigo-400"
              />
              <label className="text-sm text-gray-800">Remember me</label>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 rounded-xl bg-indigo-500 text-white font-semibold hover:bg-indigo-600 transition disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        )}

        {/* Register Form */}
        {tab === 'register' && (
          <form onSubmit={handleRegister} className="mt-6 space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                value={registerName}
                onChange={(e) => setRegisterName(e.target.value)}
                placeholder="John Doe"
                className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
                placeholder="youremail@example.com"
                className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                  placeholder="Create a strong password"
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Password must be at least 8 characters long with one uppercase letter, one number, and one special character.
              </p>
            </div>

            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="mt-1"
              />
              <label className="text-sm text-gray-800">
                I agree to the{' '}
                <span className="text-indigo-500 hover:underline">Terms of Service</span> and{' '}
                <span className="text-indigo-500 hover:underline">Privacy Policy</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 rounded-xl bg-indigo-500 text-white font-semibold hover:bg-indigo-600 transition disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthPage;