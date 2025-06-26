import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BookOpen, Bell, User } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="flex justify-between items-center px-10 py-4 shadow-sm bg-white">
      <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
        <BookOpen className="text-purple-500" />
        <span className="text-xl font-semibold text-purple-700">RentReads</span>
      </div>

      <nav className="flex items-center space-x-8 text-sm font-medium text-gray-700">
        <button
          onClick={() => navigate('/')}
          className={`${isActive('/') ? 'text-purple-600 underline underline-offset-4' : ''}`}
        >
          Home
        </button>

        <button
          onClick={() => navigate('/readlist')}
          className={`${isActive('/readlist') ? 'text-purple-600 underline underline-offset-4' : ''}`}
        >
          ReadList
        </button>

        <button
          onClick={() => navigate('/upload')}
          className={`${isActive('/upload') ? 'text-purple-600 underline underline-offset-4' : ''}`}
        >
          Upload
        </button>

        <button
          onClick={() => navigate('/dashboard')}
          className={`${isActive('/dashboard') ? 'text-purple-600 underline underline-offset-4' : ''}`}
        >
          Dashboard
        </button>

        <Bell size={18} />
        <User size={18} />

        <button
          onClick={() => navigate('/login')}
          className={`hover:text-purple-600 ${isActive('/login') ? 'font-semibold' : 'text-black'}`}
        >
          Login
        </button>
      </nav>
    </header>
  );
};

export default Navbar;