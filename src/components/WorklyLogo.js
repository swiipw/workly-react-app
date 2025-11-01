import React from 'react';
import { Zap } from 'lucide-react';

// Se exportan las constantes necesarias (colors y courseData)
export const WorklyLogo = ({ size = 28, className = '' }) => (
  <div className={`flex items-center space-x-1 ${className}`}>
    <Zap size={size} className="text-[#F39C12]" /> 
    <span className={`text-xl font-extrabold text-[#17202A]`}>Workly</span>
  </div>
);

// Exportar como default para importarlo fácilmente
export default WorklyLogo;
