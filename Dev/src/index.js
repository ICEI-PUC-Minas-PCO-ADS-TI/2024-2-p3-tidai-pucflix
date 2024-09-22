import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import reportWebVitals from './reportWebVitals';
import Pucflix from './pages/Pucflix';
import Pag_gerenciamento_perfis from './pages/Pag_gerenciamento_perfis';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Pucflix />
    <Pag_gerenciamento_perfis/>
  </React.StrictMode>
);

reportWebVitals();
