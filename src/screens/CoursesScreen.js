import React, { useState } from 'react';
import { BookOpen, Search, Code, LayoutGrid, Zap, Home, ChevronRight } from 'lucide-react';
import { courseData, colors } from '../data/constants.js'; // Importamos la data
import CourseDetailScreen from './CourseDetailScreen'; // Importamos el detalle
import EnrollmentForm from './EnrollmentForm'; // Importamos el formulario

// --- Componente Auxiliar: Tarjeta de Curso (CourseCard) ---
const CourseCard = ({ course, onSelect }) => {
    const IconComponent = course.icon || BookOpen; // Default Icon
    return (
        <div 
            onClick={() => onSelect(course)}
            className={`flex justify-between items-center p-4 rounded-xl shadow-md cursor-pointer transition duration-300 transform hover:scale-[1.02] ${course.color}`}
        >
            <div className="flex flex-col">
                <h4 className="text-lg font-bold text-white">{course.title}</h4>
                <p className="text-sm text-gray-200 mt-1">{course.duration} • {course.level}</p>
            </div>
            <div className="p-2 bg-white/20 rounded-full">
                <ChevronRight size={24} className="text-white" />
            </div>
        </div>
    );
};

// --- Pantalla 6: Cursos (CoursesScreen) ---
const CoursesScreen = ({ onSelectCourse }) => { // onSelectCourse es en realidad el objeto 'user'
    
    const [searchTerm, setSearchTerm] = useState('');
    const [view, setView] = useState('list'); // 'list', 'detail', 'enroll'
    const [selectedCourse, setSelectedCourse] = useState(null);
    
    // Mapeamos los íconos (ya que no se pueden poner en el JSON de datos)
    const courseListWithIcons = courseData.map(course => {
        let icon;
        if (course.id === 1 || course.id === 4) icon = Code;
        else if (course.id === 2) icon = LayoutGrid;
        else if (course.id === 3) icon = Zap;
        else icon = BookOpen;
        return { ...course, icon };
    });

    // Filtrar la lista de cursos
    const filteredCourses = courseListWithIcons.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    const handleSelectCourse = (course) => {
        setSelectedCourse(course);
        setView('detail');
    };
    
    const handleEnroll = (course) => {
        setSelectedCourse(course);
        setView('enroll');
    };
    
    // --- Renderizado de Vistas ---
    if (view === 'enroll') {
        return (
            <EnrollmentForm 
                course={selectedCourse} 
                onCancel={() => setView('detail')} 
                user={onSelectCourse} // Pasamos el objeto 'user' para el llenado automático
                onFinish={() => setView('list')}
            />
        );
    }
    
    if (view === 'detail') {
        return (
            <CourseDetailScreen 
                course={selectedCourse} 
                onBack={() => setView('list')} 
                onEnroll={handleEnroll}
            />
        );
    }

    return (
        <div className="p-4 space-y-6 animate-fade-in-up">
            <h2 className="text-2xl font-extrabold text-[#17202A]">Catálogo de Cursos</h2>

            {/* Barra de Búsqueda */}
            <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                    type="text"
                    placeholder="Buscar curso por título (ej: Python)"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-[#1ABC9C] focus:border-[#1ABC9C] transition duration-150 shadow-sm"
                />
            </div>

            {/* Lista de Cursos */}
            <div className="space-y-4">
                {filteredCourses.length > 0 ? (
                    filteredCourses.map((course) => (
                        <CourseCard key={course.id} course={course} onSelect={handleSelectCourse} />
                    ))
                ) : (
                    <p className="text-center text-gray-500 pt-10">No se encontraron cursos para "{searchTerm}".</p>
                )}
            </div>
            
        </div>
    );
};

export default CoursesScreen;
