import React, { useState } from 'react';
import { Briefcase, Search } from 'lucide-react';

// --- Componente Auxiliar: Tarjeta de Empleo (JobCard) ---
const JobCard = ({ title, company, location, tags, salary }) => (
    <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition duration-300">
        <div className="flex items-start space-x-3 mb-3">
            <div className="p-3 bg-[#1ABC9C]/10 rounded-lg">
                <Briefcase size={24} className="text-[#1ABC9C]" />
            </div>
            <div>
                <h4 className="text-lg font-bold text-[#17202A]">{title}</h4>
                <p className="text-sm text-gray-500">{company} • {location}</p>
            </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">
                    {tag}
                </span>
            ))}
        </div>
        
        <div className="flex justify-between items-center pt-3 border-t border-gray-100">
            <span className="text-sm font-semibold text-[#F39C12]">{salary}</span>
            <button className="text-sm text-[#17202A] font-medium hover:text-[#1ABC9C] transition duration-200">
                Postular →
            </button>
        </div>
    </div>
);

// --- Pantalla 4: Empleos (JobsScreen) ---
const JobsScreen = () => {
    const jobList = [
        { title: "Desarrollador React Mid", company: "TechSolutions", location: "Remoto", tags: ["Frontend", "React", "JavaScript"], salary: "$50K - $70K" },
        { title: "Diseñador UX/UI Senior", company: "Creative Minds", location: "Lima, Perú", tags: ["UX", "Figma", "Prototipado"], salary: "$60K - $85K" },
        { title: "Especialista SEO", company: "Digital Growth", location: "Híbrido", tags: ["SEO", "Marketing", "Contenido"], salary: "$40K - $55K" },
        { title: "Data Scientist Junior", company: "DataLabs", location: "Remoto", tags: ["Python", "Machine Learning", "Análisis"], salary: "$45K - $65K" },
        { title: "Desarrollador React Native", company: "App Innovators", location: "Remoto", tags: ["Móvil", "React Native", "iOS/Android"], salary: "$55K - $80K" },
    ];
    
    const [searchTerm, setSearchTerm] = useState('');
    
    // Filtrar la lista de empleos
    const filteredJobs = jobList.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="p-4 space-y-6 animate-fade-in-up">
            <h2 className="text-2xl font-extrabold text-[#17202A]">Encuentra tu próximo empleo</h2>

            {/* Barra de Búsqueda */}
            <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                    type="text"
                    placeholder="Buscar por título o skill (ej: React)"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-[#1ABC9C] focus:border-[#1ABC9C] transition duration-150 shadow-sm"
                />
            </div>

            {/* Resultados de la Búsqueda */}
            <div className="space-y-4">
                {filteredJobs.length > 0 ? (
                    filteredJobs.map((job, index) => (
                        <JobCard key={index} {...job} />
                    ))
                ) : (
                    <p className="text-center text-gray-500 pt-10">No se encontraron empleos para "{searchTerm}".</p>
                )}
            </div>
            
        </div>
    );
};

export default JobsScreen;
