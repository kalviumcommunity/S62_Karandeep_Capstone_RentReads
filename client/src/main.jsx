import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' for React 18+
import App from './App'; // Main App component
import './index.css'; // Optional CSS file

// Create a root and render the App component
const root = ReactDOM.createRoot(document.getElementById('root')); // Matches the <div id="root"></div> in index.html
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);