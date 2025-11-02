import React from 'react';
import { User, Zap, Code, LayoutGrid, DollarSign } from 'lucide-react';

// --- Componente Auxiliar: SkillPill (Ícono + Texto) ---
const SkillPill = ({ icon: Icon, text, colorClass }) => (
    <div className={`flex items-center space-x-2 p-3 rounded-xl shadow-md transition duration-300 ${colorClass}`}>
        <Icon size={20} className="text-white" />
        <span className="text-sm font-semibold text-white">{text}</span>
    </div>
);


// --- Pantalla 3: Inicio (HomeScreen) ---
const HomeScreen = ({ user }) => {
    
    // Función para obtener el saludo dinámico
    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return "Buenos días";
        if (hour < 18) return "Buenas tardes";
        return "Buenas noches";
    };

    return (
        <div className="p-4 space-y-8 animate-fade-in-up">
            
            {/* Sección de Saludo y Asistente */}
            <div className="bg-[#17202A] text-white p-6 rounded-2xl shadow-lg relative overflow-hidden">
                <div className="space-y-2 z-10 relative">
                    <p className="text-lg font-medium">{getGreeting()},</p>
                    <h2 className="text-3xl font-extrabold">{user?.name || 'Usuario'}</h2>
                    <p className="text-gray-300 pt-2">Tu mapa de ruta hacia el futuro digital.</p>
                </div>
                
                {/* Asistente Josué (Simulación de imagen) */}
                <div className="absolute right-[-10px] bottom-0 w-24 h-24 bg-[#1ABC9C]/50 rounded-full flex items-center justify-center animate-bounce z-0">
                    <User size={40} className="text-white" />
                </div>
            </div>

            {/* Sección de Progreso */}
            <div className="bg-white p-6 rounded-2xl shadow-lg space-y-4">
                <h3 className="text-xl font-bold text-[#17202A]">Tu Progreso Hoy</h3>
                
                <div className="flex justify-between items-center text-gray-700">
                    <span className="text-sm">Módulo completado</span>
                    <span className="font-semibold text-[#F39C12]">3/12</span>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-[#1ABC9C] h-2.5 rounded-full" style={{ width: '25%' }}></div>
                </div>
                
                <div className="flex justify-center pt-2">
                    <button className="text-[#1ABC9C] text-sm font-semibold hover:underline">
                        Continuar Aprendizaje →
                    </button>
                </div>
            </div>

            {/* Sección de Skills Recomendadas */}
            <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#17202A]">Skills Recomendadas</h3>
                <div className="grid grid-cols-2 gap-4">
                    <SkillPill icon={Zap} text="Marketing Digital" colorClass="bg-[#F39C12] hover:bg-[#E67E22]" />
                    <SkillPill icon={Code} text="Desarrollo Web" colorClass="bg-[#1ABC9C] hover:bg-[#17202A]" />
                    <SkillPill icon={LayoutGrid} text="Diseño UI/UX" colorClass="bg-[#85C1E9] hover:bg-[#1ABC9C]" />
                    <SkillPill icon={DollarSign} text="Finanzas Personales" colorClass="bg-[#E67E22] hover:bg-[#F39C12]" />
                </div>
            </div>
            
        </div>
    );
};

export default HomeScreen;
