import React, { useState, useCallback } from 'react';
import { Home, BookOpen, User, Briefcase, Code, LayoutGrid, DollarSign, Zap, Mail, Lock, Search, ChevronLeft, Calendar, Clock, Award, ListChecks, CheckCircle } from 'lucide-react';

// --- Configuración de Colores de la Paleta Workly (Workly Color Palette) ---
const colors = {
  'workly-primary': '#17202A',   // Azul Oscuro/Navy (Fondo principal, NavBar)
  'workly-secondary': '#1ABC9C', // Teal/Cyan (Acentos, íconos de cursos)
  'workly-accent': '#F39C12',    // Naranja/Amarillo (Botones, CTA, Títulos)
  'workly-light-bg': '#85C1E9',  // Azul Claro (Fondos de tarjetas, contraste)
  'workly-orange': '#E67E22'     // Naranja (Acento secundario)
};

// --- Lista de Datos de Cursos (Ampliada) ---
const courseData = [
    { 
        id: 1, 
        title: "Introducción a Python y Data Science", 
        description: "Aprende las bases de programación y análisis de datos. Ideal para principiantes.", 
        color: "bg-workly-secondary", 
        icon: Code,
        instructor: "Dr. Elena García",
        duration: "4 semanas",
        level: "Básico",
        topics: ["Variables y Tipos de Datos", "Estructuras de Control", "Librerías Pandas y Numpy", "Visualización de Datos"],
    },
    { 
        id: 2, 
        title: "Fundamentos de Diseño UX/UI", 
        description: "Domina el arte de crear experiencias de usuario intuitivas y atractivas.", 
        color: "bg-workly-accent", 
        icon: LayoutGrid,
        instructor: "Ing. Marco Ríos",
        duration: "6 semanas",
        level: "Intermedio",
        topics: ["Investigación de Usuarios", "Prototipado en Figma", "Diseño de Interacción", "Tests de Usabilidad"],
    },
    { 
        id: 3, 
        title: "Marketing Digital para Freelancers", 
        description: "Estrategias probadas para conseguir clientes y aumentar tu marca personal.", 
        color: "bg-workly-orange", 
        icon: Zap,
        instructor: "Lic. Sofia Herrera",
        duration: "3 semanas",
        level: "Avanzado",
        topics: ["SEO y SEM", "Estrategias de Contenido", "Marketing en Redes Sociales", "Análisis de Conversión"],
    },
    { 
        id: 4, 
        title: "Desarrollo de Apps Móviles con React Native", 
        description: "Crea aplicaciones nativas para iOS y Android con un solo código base.", 
        color: "bg-workly-primary", 
        icon: Code,
        instructor: "Ing. Pedro López",
        duration: "8 semanas",
        level: "Intermedio",
        topics: ["Componentes y Props", "Navegación", "Manejo de Estado (Hooks)", "APIs Nativas"],
    },
];

// --- Componente: Icono de Logo (Simple SVG para Workly) ---
const WorklyLogo = ({ size = 28, className = '' }) => (
  <div className={`flex items-center space-x-1 ${className}`}>
    <Zap size={size} className="text-workly-accent" />
    <span className={`text-xl font-extrabold text-workly-primary`}>Workly</span>
  </div>
);

// --- Componente: Botón Principal de la App (FIXED) ---
const PrimaryButton = ({ children, onClick, disabled = false, className = '', color = 'workly-accent' }) => {
    const baseClasses = 'w-full py-3 px-4 rounded-xl font-bold transition duration-300 active:scale-[0.98] shadow-lg';
    let colorClasses;
    
    if (disabled) {
        colorClasses = 'bg-gray-400 cursor-not-allowed';
    } else if (color === 'workly-secondary') {
        colorClasses = 'bg-workly-secondary text-white hover:bg-workly-primary/90';
    } else { // default is workly-accent
        colorClasses = 'bg-workly-accent text-white hover:bg-workly-orange';
    }
      
    const combinedClasses = `${baseClasses} ${colorClasses} ${className}`;

    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={combinedClasses}
      >
        {children}
      </button>
    );
};

// --- Pantalla 1: Inicio de Sesión (LoginScreen) ---
const LoginScreen = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (!email || !password) {
      setError('Por favor, ingresa tu correo y contraseña.');
      setIsLoading(false);
      return;
    }
    
    const worklyDomain = '@workly.com';
    const requiredPassword = '123456';
    const emailLower = email.toLowerCase();

    if (password !== requiredPassword) {
        setError('Contraseña incorrecta. Intenta con 123456.');
        setIsLoading(false);
        return;
    }
    
    if (emailLower.endsWith(worklyDomain) && emailLower.length > worklyDomain.length) {
        let username = email.substring(0, email.length - worklyDomain.length);
        const formattedName = username.charAt(0).toUpperCase() + username.slice(1);
        
        setTimeout(() => {
            setIsLoading(false);
            onLogin({ name: formattedName, email: email });
        }, 1500);
    } else {
        setError(`El correo debe terminar con ${worklyDomain}.`);
        setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-2xl">
        <div className="flex flex-col items-center mb-10">
          <WorklyLogo size={40} className="mb-2" />
          <h1 className="text-3xl font-extrabold text-workly-primary">Bienvenido a Workly</h1>
          <p className="text-gray-500 mt-2 text-center">Conecta con tu futuro digital.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="email"
                placeholder="tu_nombre@workly.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-workly-secondary focus:border-workly-secondary transition duration-150"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="password"
                placeholder="123456"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-workly-secondary focus:border-workly-secondary transition duration-150"
              />
            </div>
          </div>

          {error && (
            <div className="text-sm text-red-600 bg-red-50 p-3 rounded-lg border border-red-200">
              {error}
            </div>
          )}

          <PrimaryButton type="submit" disabled={isLoading}>
            {isLoading ? 'Iniciando Sesión...' : 'Iniciar Sesión'}
          </PrimaryButton>
        </form>

        <p className="mt-8 text-center text-sm text-gray-500">
          Contraseña demo: 123456
        </p>
      </div>
    </div>
  );
};

// --- Componentes de Contenido de Pestañas (Tab Content Components) ---

// Auxiliar Card Component para Empleos
const JobCard = ({ title, details, icon: Icon, accentColor }) => (
    <div className="p-3 bg-white rounded-lg flex items-start space-x-3 shadow-sm border border-gray-200 hover:shadow-lg transition duration-200 cursor-pointer">
        <div className={`p-2 rounded-lg bg-${accentColor}/20`}>
            <Icon className={`w-5 h-5 text-${accentColor}`} />
        </div>
        <div className="flex-1 min-w-0">
            <p className="font-semibold text-sm text-workly-primary truncate">{title}</p>
            <p className="text-xs text-gray-500 mt-0.5">{details}</p>
        </div>
    </div>
);

// Auxiliar Skill Pill Component
const SkillPill = ({ skill, color }) => (
    <span className={`inline-block whitespace-nowrap px-3 py-1 text-sm font-medium rounded-full ${color}`}>
        {skill}
    </span>
);

// 2.1 Pestaña Inicio (HomeScreen)
const HomeScreen = ({ user }) => {
    const [showJosueMessage, setShowJosueMessage] = useState(false);
    
    return (
        <div className="p-4 space-y-6 relative">
            
            {/* RECUADRO DE BIENVENIDA DINÁMICO */}
            <div className="p-4 bg-workly-primary text-white rounded-xl shadow-lg flex justify-between items-center">
                <div className='flex items-center space-x-2'>
                    <User className='w-6 h-6 text-workly-secondary'/>
                    <h2 className="text-2xl font-extrabold">Hola, {user.name}</h2>
                </div>
                <div className='text-xs font-light opacity-75'>
                    Listo para conectar
                </div>
            </div>
            
            <h2 className="text-3xl font-extrabold text-workly-primary">Dashboard</h2>
            
            <div className="bg-workly-light-bg/30 p-4 rounded-xl shadow-md border border-workly-light-bg">
                <h3 className="text-xl font-bold text-workly-accent mb-2 flex items-center">
                    <Zap className="w-6 h-6 mr-2"/>
                    ¡Tu Próximo Paso!
                </h3>
                <p className="text-gray-600 mb-4">
                    Revisa las ofertas de trabajo en la nueva sección de **Empleos** y no te pierdas el curso de la semana.
                </p>
                
                {/* Curso Destacado */}
                <div className="p-3 bg-white rounded-lg flex items-start space-x-3 shadow-sm border border-gray-200">
                    <div className="p-2 rounded-lg bg-workly-secondary/20">
                        <Code className="w-5 h-5 text-workly-secondary" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm text-workly-primary truncate">Curso: Introducción a React</p>
                        <p className="text-xs text-gray-500 mt-0.5">Aprende a construir interfaces modernas.</p>
                    </div>
                </div>
                
                <button className="mt-4 text-workly-primary font-semibold text-sm hover:text-workly-accent transition">
                    Ver Cursos &rarr;
                </button>
            </div>

            <div className="p-4 rounded-xl shadow-md bg-white border border-gray-100">
                <h3 className="text-xl font-bold text-workly-primary mb-2 flex items-center">
                    <Code className="w-6 h-6 mr-2 text-workly-secondary"/>
                    Habilidades Clave
                </h3>
                <p className="text-gray-600">
                    Las tres habilidades más demandadas en Workly este mes.
                </p>
                <div className="mt-4 flex space-x-3 overflow-x-auto pb-2">
                    <SkillPill skill="UX Writing" color="bg-workly-secondary/20 text-workly-secondary" />
                    <SkillPill skill="Cloud Computing" color="bg-workly-accent/20 text-workly-accent" />
                    <SkillPill skill="SQL Básico" color="bg-workly-orange/20 text-workly-orange" />
                </div>
            </div>

            {/* Asistente Virtual Josué (SOLO EN HOME) */}
            <div className="fixed bottom-20 right-4 z-20 flex items-end">
                {showJosueMessage && (
                    <div className="bg-blue-600 text-white p-3 rounded-lg shadow-lg mb-2 mr-2 max-w-[200px] text-sm animate-fade-in-up">
                        Hola, soy Josué, tu asistente virtual. ¿Necesitas ayuda?
                    </div>
                )}
                <button
                    className="w-12 h-12 bg-workly-secondary rounded-full flex items-center justify-center shadow-xl transform transition-transform duration-200 hover:scale-110 overflow-hidden"
                    onMouseEnter={() => setShowJosueMessage(true)}
                    onMouseLeave={() => setShowJosueMessage(false)}
                    aria-label="Asistente Virtual Josué"
                >
                    <img src="https://assets.website-files.com/64b5665b1615f7bf4868bf03/64b5665b1615f7bf4868c2d4_emoji-male-technologist-dark-skin-tone-by-twitter.png" alt="Josué, asistente virtual" className="w-full h-full object-cover" /> 
                </button>
            </div>
        </div>
    );
};

// 2.2 Pestaña Empleos (JobsScreen) - Con Buscador Funcional
const JobsScreen = () => {
    // Lista de empleos para filtrar
    const initialJobs = [
        { id: 1, title: "Diseñador UI/UX Jr. (Remoto)", icon: LayoutGrid, accentColor: "workly-secondary", details: "Startup de tecnología. Experiencia con Figma y prototipado. $600 - $800 USD/mes." },
        { id: 2, title: "Asistente Virtual Bilingüe", icon: MessageCircle, accentColor: "workly-orange", details: "Gestión de agendas y correo electrónico. Inglés avanzado indispensable. Pago por hora." },
        { id: 3, title: "Desarrollador Frontend (React)", icon: Code, accentColor: "workly-primary", details: "Proyecto de 3 meses, requiere experiencia en componentes funcionales. Freelance." },
        { id: 4, title: "Especialista en SEO y Contenido", icon: BookOpen, accentColor: "workly-accent", details: "Creación de artículos optimizados y análisis de tráfico. Contrato flexible." },
        { id: 5, title: "Analista de Datos (Python)", icon: DollarSign, accentColor: "workly-secondary", details: "Manejo de bases de datos y análisis estadístico. Dominio de Python y SQL." },
    ];

    const [searchTerm, setSearchTerm] = useState('');

    // Lógica de filtrado en tiempo real
    const filteredJobs = initialJobs.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.details.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-4 space-y-6">
            <h2 className="text-3xl font-extrabold text-workly-primary flex items-center">
                <Briefcase className="w-7 h-7 mr-2 text-workly-accent"/>
                Oportunidades de Empleo
            </h2>
            <p className="text-gray-600">
                Explora ofertas de trabajo remoto y proyectos freelance adaptados a jóvenes profesionales.
            </p>
            
            {/* Buscador */}
            <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                    type="text"
                    placeholder="Buscar por título, habilidad o palabra clave..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-workly-secondary focus:border-workly-secondary transition duration-150 shadow-md"
                />
            </div>
            
            <div className="space-y-4">
                {filteredJobs.length > 0 ? (
                    filteredJobs.map(job => (
                        <JobCard
                            key={job.id}
                            title={job.title}
                            icon={job.icon}
                            accentColor={job.accentColor}
                            details={job.details}
                        />
                    ))
                ) : (
                    <div className="text-center p-8 bg-white rounded-xl shadow-inner">
                        <p className="text-gray-500 font-medium">No se encontraron empleos que coincidan con "{searchTerm}".</p>
                        <p className="text-sm text-gray-400 mt-1">Intenta con otras palabras clave.</p>
                    </div>
                )}
            </div>

            <PrimaryButton className="bg-workly-secondary hover:bg-workly-primary">
                Aplicar Filtros Avanzados
            </PrimaryButton>
        </div>
    );
};

// --- Componentes para la Navegación de Cursos ---

// 2.3.1 Formulario de Inscripción
const EnrollmentForm = ({ course, onBack, user }) => {
    const [formData, setFormData] = useState({
        name: user.name,
        email: user.email,
        phone: '',
        country: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulación de envío de datos
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            // Normalmente aquí se enviaría la data al backend
            console.log("Inscripción enviada:", formData, "para el curso:", course.title);
        }, 2000);
    };
    
    // Si la inscripción fue exitosa, muestra el mensaje de éxito
    if (isSuccess) {
        return (
            <div className="p-8 bg-white rounded-xl shadow-2xl text-center flex flex-col items-center">
                <CheckCircle className="w-16 h-16 text-workly-secondary mb-4 animate-bounce" />
                <h3 className="text-2xl font-bold text-workly-primary mb-2">¡Inscripción Exitosa!</h3>
                <p className="text-gray-600 mb-6">
                    Te has inscrito al curso **{course.title}**. Recibirás un correo de confirmación con los detalles de inicio.
                </p>
                <PrimaryButton onClick={onBack} className="max-w-xs">
                    Volver al Curso
                </PrimaryButton>
            </div>
        );
    }

    return (
        <div className="p-4 space-y-6">
            <button onClick={onBack} className="flex items-center text-workly-primary hover:text-workly-accent transition mb-4">
                <ChevronLeft className="w-5 h-5 mr-1" />
                Volver a {course.title}
            </button>
            <h2 className="text-3xl font-extrabold text-workly-primary">Formulario de Inscripción</h2>
            <p className="text-gray-600">Completa tus datos para asegurar tu cupo en **{course.title}**.</p>

            <form onSubmit={handleSubmit} className="space-y-4 bg-white p-5 rounded-xl shadow-lg">
                <InputGroup label="Nombre Completo" name="name" value={formData.name} onChange={handleChange} required disabled />
                <InputGroup label="Correo Electrónico" name="email" value={formData.email} onChange={handleChange} type="email" required disabled />
                <InputGroup label="Teléfono (WhatsApp)" name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="Ej: +54 9 11 1234 5678" required />
                <InputGroup label="País de Residencia" name="country" value={formData.country} onChange={handleChange} placeholder="Ej: México, Argentina, etc." required />

                <PrimaryButton type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Procesando Inscripción...' : 'Confirmar Inscripción'}
                </PrimaryButton>
            </form>
        </div>
    );
};

// Auxiliar Input Group
const InputGroup = ({ label, name, value, onChange, type = 'text', placeholder, required = false, disabled = false }) => (
    <div>
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <input
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            className={`w-full px-4 py-3 border rounded-xl focus:ring-workly-secondary focus:border-workly-secondary transition duration-150 ${
                disabled ? 'bg-gray-100 text-gray-500' : 'border-gray-300'
            }`}
        />
    </div>
);


// 2.3.2 Vista de Detalle de Curso
const CourseDetailScreen = ({ course, onBack, onEnroll }) => {
    
    // Función para obtener la clase de color para el ícono y el texto
    const getColorClass = (colorClass) => colorClass.replace('bg-', 'text-').replace('/20', '');

    return (
        <div className="p-4 space-y-6">
            <button onClick={onBack} className="flex items-center text-workly-primary hover:text-workly-accent transition mb-4">
                <ChevronLeft className="w-5 h-5 mr-1" />
                Volver a Cursos
            </button>
            
            {/* Encabezado del Curso */}
            <div className="bg-white p-5 rounded-xl shadow-xl">
                <div className={`p-4 inline-flex rounded-xl ${course.color}/20 mb-4`}>
                    <course.icon className={`w-8 h-8 ${getColorClass(course.color)}`} />
                </div>
                <h1 className="text-3xl font-extrabold text-workly-primary mb-2">{course.title}</h1>
                <p className="text-gray-600 mb-4">{course.description}</p>
                
                {/* Metadatos */}
                <div className="grid grid-cols-2 gap-3 text-sm border-t pt-4">
                    <MetaItem icon={User} label="Instructor" value={course.instructor} />
                    <MetaItem icon={Clock} label="Duración Estimada" value={course.duration} />
                    <MetaItem icon={Award} label="Nivel" value={course.level} />
                    <MetaItem icon={Calendar} label="Próxima Edición" value="Inmediata" />
                </div>
            </div>

            {/* Temario */}
            <div className="bg-white p-5 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-workly-primary mb-4 flex items-center">
                    <ListChecks className="w-5 h-5 mr-2 text-workly-secondary"/>
                    Temario del Curso
                </h3>
                <ul className="space-y-3">
                    {course.topics.map((topic, index) => (
                        <li key={index} className="flex items-start text-gray-700">
                            <span className="text-workly-accent font-bold mr-2">{index + 1}.</span>
                            {topic}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Botón de Inscripción (Sticky) */}
            <div className="sticky bottom-20 bg-white p-3 rounded-xl shadow-2xl border-t border-gray-100">
                <PrimaryButton onClick={() => onEnroll(course)} color='workly-secondary'>
                    Inscribirse al Curso
                </PrimaryButton>
            </div>
        </div>
    );
};

// Auxiliar Meta Item
const MetaItem = ({ icon: Icon, label, value }) => (
    <div className="flex items-start space-x-2">
        <Icon className="w-4 h-4 text-gray-500 mt-1" />
        <div className='min-w-0'>
            <p className="font-medium text-gray-500 text-xs">{label}</p>
            <p className="font-semibold text-workly-primary text-sm truncate">{value}</p>
        </div>
    </div>
);


// 2.3 Pestaña Cursos (CoursesScreen) - Pantalla Principal con Navegación
const CoursesScreen = ({ onSelectCourse, selectedCourse }) => {
    const [view, setView] = useState('list'); // 'list' o 'detail' o 'form'
    const [searchTerm, setSearchTerm] = useState('');
    const [courseForEnroll, setCourseForEnroll] = useState(null);

    // Filtrar la lista de cursos
    const filteredCourses = courseData.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Navegar a la vista de detalle
    const handleSelectCourse = useCallback((course) => {
        setCourseForEnroll(course);
        setView('detail');
    }, []);

    // Navegar al formulario de inscripción
    const handleEnroll = useCallback((course) => {
        setCourseForEnroll(course);
        setView('form');
    }, []);

    // Volver a la lista de cursos
    const handleBackToList = useCallback(() => {
        setView('list');
        setCourseForEnroll(null);
    }, []);
    
    // Volver al detalle del curso (desde el formulario)
    const handleBackToDetail = useCallback(() => {
        setView('detail');
    }, []);

    if (view === 'detail' && courseForEnroll) {
        return <CourseDetailScreen course={courseForEnroll} onBack={handleBackToList} onEnroll={handleEnroll} />;
    }
    
    if (view === 'form' && courseForEnroll) {
        // El componente App pasará el objeto user
        return <EnrollmentForm course={courseForEnroll} onBack={handleBackToDetail} user={onSelectCourse} />; 
    }

    // Vista de Lista (list)
    return (
        <div className="p-4 space-y-6">
            <h2 className="text-3xl font-extrabold text-workly-primary">Cursos Gratuitos</h2>
            <p className="text-gray-600">Invierte en tu futuro. Accede a formación de alta calidad en habilidades digitales clave.</p>

            {/* Buscador de Cursos */}
            <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                    type="text"
                    placeholder="Buscar curso por título o descripción..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-workly-secondary focus:border-workly-secondary transition duration-150 shadow-md"
                />
            </div>

            <div className="space-y-4">
                {filteredCourses.length > 0 ? (
                    filteredCourses.map(course => (
                        <CourseCard
                            key={course.id}
                            title={course.title}
                            description={course.description}
                            color={course.color}
                            icon={course.icon}
                            onClick={() => handleSelectCourse(course)} // Hacemos la tarjeta clickeable
                        />
                    ))
                ) : (
                    <div className="text-center p-8 bg-white rounded-xl shadow-inner">
                        <p className="text-gray-500 font-medium">No se encontraron cursos que coincidan con "{searchTerm}".</p>
                        <p className="text-sm text-gray-400 mt-1">Intenta con otras palabras clave.</p>
                    </div>
                )}
            </div>

        </div>
    );
};

// Auxiliar Course Card Component
const CourseCard = ({ title, description, color, icon: Icon, onClick }) => (
  <div onClick={onClick} className="bg-white p-5 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300 cursor-pointer active:scale-[0.99]">
    <div className="flex items-center space-x-4">
      <div className={`p-3 rounded-xl text-white ${color}`}>
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h3 className="text-lg font-bold text-workly-primary">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      </div>
    </div>
    <div className="mt-4">
        {/* Cambiado de botón de acción a simplemente mostrar el Call to Action */}
        <p className='text-workly-secondary font-semibold text-sm flex items-center'>
            Ver Detalles <ChevronLeft className='w-4 h-4 ml-1 transform rotate-180' />
        </p>
    </div>
  </div>
);

// 2.4 Pestaña Perfil (ProfileScreen)
const ProfileScreen = ({ user, onLogout }) => (
  <div className="p-4 space-y-6">
    <h2 className="text-3xl font-extrabold text-workly-primary">Mi Perfil</h2>
    
    <div className="flex items-center space-x-4 p-4 bg-workly-light-bg/30 rounded-xl">
        <User className="w-10 h-10 text-workly-primary p-2 bg-white rounded-full border-2 border-workly-secondary"/>
        <div>
            {/* Usa el nombre y email del usuario dinámico */}
            <p className="text-xl font-bold text-workly-primary">{user.name}</p>
            <p className="text-sm text-gray-600">{user.email}</p>
        </div>
    </div>

    <div className="bg-white p-5 rounded-xl shadow-md space-y-4">
        <h3 className="text-lg font-bold text-workly-primary border-b pb-2 mb-3">Mi Trayectoria</h3>
        
        <ProfileItem title="Nivel de Capacitación" value="Avanzado (3 Cursos Completados)" icon={BookOpen} />
        <ProfileItem title="Experiencia Laboral" value="1 Proyecto Freelance Completado" icon={DollarSign} />
        <ProfileItem title="Edad" value="19 años" icon={User} />
    </div>

    <PrimaryButton onClick={onLogout}>
      Cerrar Sesión
    </PrimaryButton>
  </div>
);

// Auxiliar Profile Item Component
const ProfileItem = ({ title, value, icon: Icon }) => (
    <div className="flex items-center justify-between py-2 border-b last:border-b-0">
        <div className="flex items-center space-x-2">
            <Icon className="w-5 h-5" />
            <span className="text-sm font-medium text-gray-700">{title}</span>
        </div>
        <span className="text-sm font-semibold text-workly-primary">{value}</span>
    </div>
);


// --- Componente: Barra de Navegación Inferior (BottomNavBar) ---
const BottomNavBar = ({ activeTab, onTabChange }) => {
  const tabs = [
    { name: 'Inicio', icon: Home, key: 'home' },
    { name: 'Empleos', icon: Briefcase, key: 'jobs' },
    { name: 'Cursos', icon: BookOpen, key: 'courses' },
    { name: 'Perfil', icon: User, key: 'profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-200 shadow-xl flex justify-around items-center z-10 p-2 max-w-xl mx-auto">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.key;
        const IconComponent = tab.icon;
        return (
          <button
            key={tab.key}
            onClick={() => onTabChange(tab.key)}
            className={`flex flex-col items-center justify-center p-1 w-1/4 transition-colors duration-200 ${
              isActive ? 'text-workly-accent' : 'text-gray-500 hover:text-workly-secondary'
            }`}
            aria-label={tab.name}
          >
            <IconComponent className="w-6 h-6" />
            <span className="text-xs font-medium mt-0.5">{tab.name}</span>
          </button>
        );
      })}
    </div>
  );
};


// --- Pantalla 2: Aplicación Principal (MainAppScreen) ---
const MainAppScreen = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomeScreen user={user} />;
      case 'jobs':
        return <JobsScreen />;
      case 'courses':
        // Pasamos el objeto 'user' como 'onSelectCourse' para inyectarlo en el formulario
        // Nota: Esto es un hack. En una app real se usaría Context o Redux.
        return <CoursesScreen onSelectCourse={user} />;
      case 'profile':
        return <ProfileScreen user={user} onLogout={onLogout} />;
      default:
        return <HomeScreen user={user} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="sticky top-0 bg-white shadow-sm p-4 border-b border-gray-100 z-10 max-w-xl mx-auto">
        <WorklyLogo />
      </header>
      
      <main className="max-w-xl mx-auto overflow-y-auto" style={{ minHeight: 'calc(100vh - 128px)' }}>
        {renderContent()}
      </main>

      <BottomNavBar activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};


// --- Componente Principal: App ---
export default function App() {
  const [user, setUser] = useState(null);

  if (user) {
    return <MainAppScreen user={user} onLogout={() => setUser(null)} />;
  } else {
    return <LoginScreen onLogin={(userData) => setUser(userData)} />;
  }
}

// --- Configuración de Tailwind para la paleta de colores ---
window.tailwind.config = {
  theme: {
    extend: {
      colors: colors,
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'bounce': {
            '0%, 100%': { transform: 'translateY(-25%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
            '50%': { transform: 'none', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.3s ease-out forwards',
        'bounce': 'bounce 1s infinite',
      },
    },
  },
};
