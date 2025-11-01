import React from 'react';

// --- Componente: Botón Principal de la App (FIXED) ---
const PrimaryButton = ({ children, onClick, disabled = false, className = '', color = 'workly-accent' }) => {
    const baseClasses = 'w-full py-3 px-4 rounded-xl font-bold transition duration-300 active:scale-[0.98] shadow-lg'; [cite: 10]
    let colorClasses;
    
    if (disabled) {
        colorClasses = 'bg-gray-400 cursor-not-allowed';
    } else if (color === 'workly-secondary') {
        colorClasses = 'bg-[#1ABC9C] text-white hover:bg-[#17202A]/90'; [cite: 10, 11]
    } else { // default is workly-accent
        colorClasses = 'bg-[#F39C12] text-white hover:bg-[#E67E22]'; [cite: 11, 12]
    }
      
    const combinedClasses = `${baseClasses} ${colorClasses} ${className}`; [cite: 12]
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={combinedClasses}
      >
        {children}
      </button>
    ); [cite: 13, 14]
};

export default PrimaryButton;
