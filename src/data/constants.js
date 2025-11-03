// --- Configuración de Colores de la Paleta Workly ---
export const colors = {
  'workly-primary': '#17202A',    // Azul Oscuro/Navy (Fondo principal, NavBar)
  'workly-secondary': '#1ABC9C', // Teal/Cyan (Acentos, íconos de cursos)
  'workly-accent': '#F39C12',    // Naranja/Amarillo (Botones, CTA, Títulos)
  'workly-light-bg': '#85C1E9',  // Azul Claro (Fondos de tarjetas, contraste)
  'workly-orange': '#E67E22'     // Naranja (Acento secundario)
};

// --- Lista de Datos de Cursos ---
export const courseData = [
    { 
        id: 1, 
        title: "Introducción a Python y Data Science", 
        description: "Aprende las bases de programación y análisis de datos. Ideal para principiantes.", 
        color: "bg-workly-secondary", 
        // Icono: Code, (Se importará en CoursesScreen)
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
        // Icono: LayoutGrid,
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
        // Icono: Zap,
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
        // Icono: Code,
        instructor: "Ing. Pedro López", 
        duration: "8 semanas",
        level: "Intermedio",
        topics: ["Componentes y Props", "Navegación", "Manejo de Estado (Hooks)", "APIs Nativas"], 
    },
];
