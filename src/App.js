import React, { useState } from 'react';
import LoginScreen from './screens/LoginScreen'; // Importamos la pantalla de Login
import MainAppScreen from './MainAppScreen'; // Importamos la aplicación principal

// --- Componente Principal: App ---
export default function App() {
  const [user, setUser] = useState(null);

  if (user) {
    return <MainAppScreen user={user} onLogout={() => setUser(null)} />; [cite: 129, 130]
  } else {
    return <LoginScreen onLogin={(userData) => setUser(userData)} />; [cite: 130, 131]
  }
}

// --- Configuración de Tailwind para la paleta de colores (Mantenemos esto aquí) ---
window.tailwind.config = {
  theme: {
    extend: {
      colors: {
        'workly-primary': '#17202A',   
        'workly-secondary': '#1ABC9C', 
        'workly-accent': '#F39C12',    
        'workly-light-bg': '#85C1E9',  
        'workly-orange': '#E67E22'     
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }, [cite: 132]
        },
        'bounce': {
            '0%, 100%': { transform: 'translateY(-25%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' }, [cite: 132]
            '50%': { transform: 'none', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' }, [cite: 132]
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.3s ease-out forwards',
        'bounce': 'bounce 1s infinite', [cite: 133]
      },
    },
  },
};
