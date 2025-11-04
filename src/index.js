import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importa el componente principal
// Configura React para renderizar tu componente principal (<App />)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
