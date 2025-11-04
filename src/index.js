import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importa el componente principal
// Si tienes un archivo CSS/Tailwind, importalo aquí. Ejemplo:
// import './index.css'; 

// Configura React para renderizar tu componente principal (<App />)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
