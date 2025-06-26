import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage'; // Make sure this matches the exported component
import HomePage from './pages/HomePage'; // Import your landing page
import UploadBook from './pages/UploadPage'; // Import your upload book page
import Dashboard from './pages/DashBoard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/upload" element={<UploadBook />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;