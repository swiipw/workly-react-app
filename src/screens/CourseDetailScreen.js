import React from 'react';
import { ChevronLeft, Clock, Award, ListChecks, User, Calendar } from 'lucide-react';

// --- Componente Auxiliar: MetaItem (Duración, Nivel, etc.) ---
const MetaItem = ({ icon: Icon, label, value }) => (
    <div className="flex items-center space-x-2 p-2 bg-gray-100 rounded-lg">
        <Icon size={18} className="text-[#1ABC9C]" />
        <div>
            <span className="text-xs font-medium text-gray-500">{label}</span>
            <p className="text-sm font-semibold text-[#17202A]">{value}</p>
        </div>
    </div>
);

// --- Componente de Detalle del Curso (CourseDetailScreen) ---
const CourseDetailScreen = ({ course, onBack, onEnroll }) => {
    
    // Determinar el color del nivel
    let levelColor;
    if (course.level === 'Básico') levelColor = 'bg-green-500';
    else if (course.level === 'Intermedio') levelColor = 'bg-yellow-500';
    else levelColor = 'bg-red-500';

    return (
        <div className="p-4 space-y-6 animate-fade-in-up">
            
            {/* Botón de Regreso */}
            <button 
                onClick={onBack} 
                className="flex items-center text-[#17202A] font-medium hover:text-[#F39C12] transition duration-200"
            >
                <ChevronLeft size={20} className="mr-1" /> Volver a Cursos
            </button>

            {/* Cabecera del Curso */}
            <div className="bg-white p-6 rounded-2xl shadow-lg space-y-4">
                <span className={`px-3 py-1 text-xs font-bold text-white rounded-full ${levelColor}`}>
                    {course.level}
                </span>
                <h2 className="text-3xl font-extrabold text-[#17202A]">{course.title}</h2>
                <p className="text-gray-600">{course.description}</p>
                
                {/* Metadatos */}
                <div className="grid grid-cols-2 gap-3 pt-3">
                    <MetaItem icon={Clock} label="Duración" value={course.duration} />
                    <MetaItem icon={Calendar} label="Inicio" value="Disponible Ahora" />
                    <MetaItem icon={User} label="Instructor" value={course.instructor} />
                    <MetaItem icon={Award} label="Certificado" value="Sí" />
                </div>
                
            </div>

            {/* Temario y Contenido */}
            <div className="bg-white p-6 rounded-2xl shadow-lg space-y-4">
                <h3 className="text-xl font-bold text-[#17202A]">Temario del Curso</h3>
                <ul className="space-y-3">
                    {course.topics.map((topic, index) => (
                        <li key={index} className="flex items-start space-x-3 text-gray-700">
                            <ListChecks size={20} className="text-[#F39C12] mt-1 flex-shrink-0" />
                            <span className="text-md">{topic}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Botón de Inscripción */}
            <div className="sticky bottom-4 pt-4 bg-gray-50">
                <button 
                    onClick={() => onEnroll(course)} 
                    className="w-full py-4 bg-[#F39C12] text-white font-bold rounded-xl text-lg shadow-xl hover:bg-[#E67E22] transition duration-300"
                >
                    Inscribirse Ahora
                </button>
            </div>
            
        </div>
    );
};

export default CourseDetailScreen;
