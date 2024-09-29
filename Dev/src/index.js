import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import reportWebVitals from './reportWebVitals';
import Login from './pages/Login/Login';  
import Home_page from './pages/home_page/Home_page';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Login />
    <Home_page />
  </React.StrictMode>
);

reportWebVitals();
