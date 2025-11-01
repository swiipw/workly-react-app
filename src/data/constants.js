// --- Configuración de Colores de la Paleta Workly ---
export const colors = {
  'workly-primary': '#17202A',   // Azul Oscuro/Navy (Fondo principal, NavBar) [cite: 1]
  'workly-secondary': '#1ABC9C', // Teal/Cyan (Acentos, íconos de cursos) [cite: 1]
  'workly-accent': '#F39C12',    // Naranja/Amarillo (Botones, CTA, Títulos) [cite: 1]
  'workly-light-bg': '#85C1E9',  // Azul Claro (Fondos de tarjetas, contraste) [cite: 1]
  'workly-orange': '#E67E22'     // Naranja (Acento secundario) [cite: 1]
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
        duration: "4 semanas", [cite: 4]
        level: "Básico",
        topics: ["Variables y Tipos de Datos", "Estructuras de Control", "Librerías Pandas y Numpy", "Visualización de Datos"], [cite: 4]
    },
    { 
        id: 2, 
        title: "Fundamentos de Diseño UX/UI", 
        description: "Domina el arte de crear experiencias de usuario intuitivas y atractivas.", 
        color: "bg-workly-accent", 
        // Icono: LayoutGrid,
        instructor: "Ing. Marco Ríos", [cite: 5]
        duration: "6 semanas", [cite: 5]
        level: "Intermedio",
        topics: ["Investigación de Usuarios", "Prototipado en Figma", "Diseño de Interacción", "Tests de Usabilidad"], [cite: 5]
    },
    { 
        id: 3, 
        title: "Marketing Digital para Freelancers", 
        description: "Estrategias probadas para conseguir clientes y aumentar tu marca personal.", [cite: 6]
        color: "bg-workly-orange", 
        // Icono: Zap,
        instructor: "Lic. Sofia Herrera", [cite: 7]
        duration: "3 semanas",
        level: "Avanzado",
        topics: ["SEO y SEM", "Estrategias de Contenido", "Marketing en Redes Sociales", "Análisis de Conversión"], [cite: 7]
    },
    { 
        id: 4, 
        title: "Desarrollo de Apps Móviles con React Native", 
        description: "Crea aplicaciones nativas para iOS y Android con un solo código base.", 
        color: "bg-workly-primary", [cite: 8]
        // Icono: Code,
        instructor: "Ing. Pedro López", [cite: 9]
        duration: "8 semanas",
        level: "Intermedio",
        topics: ["Componentes y Props", "Navegación", "Manejo de Estado (Hooks)", "APIs Nativas"], [cite: 9]
    },
];
