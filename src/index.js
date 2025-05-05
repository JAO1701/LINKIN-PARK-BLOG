import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from react-dom/client
import './index.css'; // Import main CSS file
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root')); // Create root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
