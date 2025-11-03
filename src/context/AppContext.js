import React, { createContext, useContext } from 'react';
import { courseData, colors } from '../data/constants.js'; // Importamos la data

// 1. Crear el Contexto
// Exportamos el contexto para que otros componentes puedan consumirlo
const AppContext = createContext();

// 2. Crear el Custom Hook para usar el contexto fácilmente
export const useAppContext = () => {
    return useContext(AppContext);
};

// 3. Crear el Provider (el componente que envolverá nuestra App)
// Aquí se gestionará todo el estado y la data global
export const AppProvider = ({ children }) => {
    
    // Aquí podríamos tener estados globales como carritos de compra, temas, etc.
    // Por ahora, solo pasamos la data de las constantes.
    const contextValue = {
        courseData,
        colors
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};
