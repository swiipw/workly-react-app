import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importa el componente principal Workly

// Configura React para renderizar tu componente principal (<App />) dentro del div con id="root"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
