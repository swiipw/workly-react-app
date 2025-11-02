import React from 'react';
import { User, BookOpen, DollarSign, ListChecks } from 'lucide-react';
import PrimaryButton from '../components/PrimaryButton'; // Importación

// --- Componente Auxiliar: Ítem de Perfil (ProfileItem) ---
const ProfileItem = ({ icon: Icon, title, value }) => (
    <div className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
        <div className="flex items-center space-x-3 text-gray-700">
            <Icon size={20} className="text-[#1ABC9C]" />
            <span className="font-medium">{title}</span>
        </div>
        <span className="text-[#17202A] font-semibold">{value}</span>
    </div>
);


// --- Pantalla 5: Perfil (ProfileScreen) ---
const ProfileScreen = ({ user, onLogout }) => {
    
    return (
        <div className="p-4 space-y-8 animate-fade-in-up">
            
            {/* Cabecera del Perfil */}
            <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-24 h-24 bg-[#F39C12]/20 rounded-full flex items-center justify-center mb-4">
                    <User size={48} className="text-[#F39C12]" />
                </div>
                <h2 className="text-2xl font-extrabold text-[#17202A]">{user?.name || 'Usuario Demo'}</h2>
                <p className="text-gray-500 mt-1">{user?.email || 'demo@workly.com'}</p>
            </div>

            {/* Información Personal */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-[#17202A] mb-4">Tu Actividad</h3>
                <div className="space-y-1">
                    <ProfileItem icon={BookOpen} title="Cursos Inscritos" value="2" />
                    <ProfileItem icon={ListChecks} title="Módulos Completados" value="14" />
                    <ProfileItem icon={DollarSign} title="Salario Meta" value="$80,000" />
                </div>
            </div>

            {/* Botón de Logout */}
            <div className="pt-4">
                <PrimaryButton 
                    onClick={onLogout} 
                    color="workly-secondary" // Usamos el color secundario para diferenciarse
                >
                    Cerrar Sesión
                </PrimaryButton>
            </div>
            
            <p className="text-center text-xs text-gray-400">Versión 1.0 (Refactorizada)</p>
            
        </div>
    );
};

export default ProfileScreen;
