import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import reportWebVitals from './reportWebVitals';
import Pucflix from './pages/Pucflix';
import Pag_escolha_perfil from './pages/Pag_escolha_perfil';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Pucflix />
    <Pag_escolha_perfil/>
  </React.StrictMode>
);

reportWebVitals();


