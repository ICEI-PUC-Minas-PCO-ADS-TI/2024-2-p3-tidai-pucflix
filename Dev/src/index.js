import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import reportWebVitals from './reportWebVitals';
import Pucflix from './pages/Pucflix.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Pucflix />
  </React.StrictMode>
  
);

reportWebVitals();

