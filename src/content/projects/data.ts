import type { Locale } from "../../i18n/types";

export type ProjectCategory = "mobile" | "web" | "backend" | "design" | "ar";

export const PROJECT_CATEGORIES: ProjectCategory[] = ["mobile", "web", "backend", "design", "ar"];

type Localized = Record<Locale, string>;

export interface ProjectMeta {
  /** Stable id, matches the image filename: /img/projects/{id}.webp */
  id: string;
  /** URL slug used in /project/:slug */
  slug: string;
  category: ProjectCategory;
  /** Raw technology labels (displayed as tags, color resolved at render). */
  technologies: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  title: Localized;
  description: Localized;
  longDescription?: Localized;
}

/**
 * Single source of truth for every project.
 * The 4 slugs ionoshub / handia / swapme / backend-app have authored detail pages
 * (src/content/projects/{en,es}/*.ts) that take precedence on the detail view.
 */
export const projects: ProjectMeta[] = [
  {
    id: "1",
    slug: "chullacash",
    category: "mobile",
    technologies: ["Flutter", "Dart", "Firebase", "Android"],
    github: "https://github.com/crycodex/ChullaCash-App",
    demo: "https://play.google.com/store/apps/details?id=com.chullacash.app",
    featured: true,
    title: { es: "Chulla Cash - App de Finanzas Personales", en: "Chulla Cash - Personal Finance App" },
    description: {
      es: "App para la gestión de finanzas personales. Implementación de servicios de autenticación y almacenamiento. Publicada en Play Store",
      en: "App for personal finance management. Authentication and storage services implementation. Published on Play Store",
    },
    longDescription: {
      es: "App móvil para la gestión de finanzas personales con autenticación, almacenamiento de datos y despliegue en Google Play Store.",
      en: "Mobile app for personal finance management with authentication, data storage and deployment on Google Play Store.",
    },
  },
  {
    id: "2",
    slug: "swapme-v1",
    category: "mobile",
    technologies: ["Flutter", "Dart", "Firebase", "Android"],
    github: "https://github.com/crycodex/SwapMe---Code-0",
    demo: "https://play.google.com/store/apps/details?id=com.company.swapme",
    title: { es: "Swapme - App de Intercambio de Ropa", en: "Swapme - Clothing Swap App" },
    description: {
      es: "App móvil para intercambiar prendas de ropa. Implementación de servicios de autenticación y almacenamiento. Publicada en Google Play Store",
      en: "Mobile app for swapping clothing items. Authentication and storage services implementation. Published on Google Play Store",
    },
    longDescription: {
      es: "App móvil para intercambio de ropa con autenticación, almacenamiento y despliegue en Google Play Store.",
      en: "Mobile app for clothing swap with authentication, storage and deployment on Google Play Store.",
    },
  },
  {
    id: "3",
    slug: "nike-app-adobexd",
    category: "design",
    technologies: ["Adobe XD", "UX/UI", "Prototyping", "User Research"],
    github: "https://github.com/crycodex/Nike-App-AdobeXd",
    title: { es: "Diseño UX/UI - Nike App", en: "UX/UI Design - Nike App" },
    description: {
      es: "Diseño de interfaz y experiencia de usuario para la app de Nike. Prototipado y pruebas de usabilidad. Implementación de diseño responsive y accesible.",
      en: "User interface and experience design for the Nike app. Prototyping and usability testing. Responsive and accessible design implementation.",
    },
  },
  {
    id: "4",
    slug: "nike-app-figma",
    category: "design",
    technologies: ["Figma", "UX/UI", "Prototyping", "Accessibility"],
    github: "https://github.com/crycodex/Desgin-Nike-App",
    title: { es: "Rediseño Nike App - UI/UX", en: "Nike App Redesign - UI/UX" },
    description: {
      es: "Rediseño de la app de Nike. Implementación de diseño responsive y accesible. Prototipado y pruebas de usabilidad.",
      en: "Nike app redesign. Responsive and accessible design implementation. Prototyping and usability testing.",
    },
  },
  {
    id: "5",
    slug: "candidatos-imbabura-2023",
    category: "web",
    technologies: ["Web", "PHP", "MySQL", "Backend"],
    github: "https://github.com/crycodex/candidatos_2023Imbabura.github.io",
    demo: "https://crycodex.github.io/candidatos_2023Imbabura.github.io/",
    title: { es: "Web Candidatos Imbabura", en: "Web Imbabura Candidates" },
    description: {
      es: "Sistema de votación para la provincia de Imbabura. Implementación de votación de candidatos, almacenamiento de votos, etc. Despliegue web",
      en: "Voting system for the province of Imbabura. Candidate voting implementation, vote storage, etc. Web deployment",
    },
    longDescription: {
      es: "Sistema de votación web para la provincia de Imbabura con votación de candidatos, almacenamiento seguro de votos y despliegue web.",
      en: "Web voting system for Imbabura province with candidate voting, secure vote storage and web deployment.",
    },
  },
  {
    id: "6",
    slug: "diigo",
    category: "web",
    technologies: ["HTML", "CSS", "JavaScript", "Forms"],
    github: "https://github.com/crycodex/diigo.github.io",
    demo: "https://crycodex.github.io/diigo.github.io/",
    title: { es: "Diigo - Landing Page", en: "Diigo - Landing Page" },
    description: {
      es: "Landing page para la app Diigo. Implementación de formulario de contacto, almacenamiento de correos, etc. Despliegue web",
      en: "Landing page for the Diigo app. Contact form implementation, email storage, etc. Web deployment",
    },
  },
  {
    id: "7",
    slug: "spicy",
    category: "backend",
    technologies: ["Web", "Database", "Backend"],
    github: "https://github.com/crycodex/spicy.github.io",
    demo: "https://crycodex.github.io/spicy.github.io/",
    title: { es: "Spiccy - Recetas de Comida Saludable", en: "Spiccy - Healthy Food Recipes" },
    description: {
      es: "Sitio web de recetas de comida saludable. Implementación de formulario de contacto, almacenamiento de recetas, etc. Despliegue web",
      en: "Healthy food recipes website. Contact form implementation, recipe storage, etc. Web deployment",
    },
  },
  {
    id: "8",
    slug: "walkydogs",
    category: "web",
    technologies: ["Web", "Firebase", "Authentication"],
    demo: "https://crycodex.github.io/WalkyDogs.github.io/",
    title: { es: "WalkiDogs - WebApp de Paseo de Mascotas", en: "WalkiDogs - Pet Walking WebApp" },
    description: {
      es: "App web para el paseo de mascotas. Implementación de servicios de autenticación y almacenamiento. Despliegue web",
      en: "Web app for pet walking. Authentication and storage services implementation. Web deployment",
    },
  },
  {
    id: "9",
    slug: "gif-search",
    category: "web",
    technologies: ["Vue.js", "API", "Vercel", "TypeScript"],
    github: "https://github.com/crycodex/curso_vuejs3/tree/main/08_buscadorGifs",
    demo: "https://giftsearch-snotcristhianrs-projects.vercel.app/",
    title: { es: "GifSearch - API de Gifs", en: "GifSearch - Gif API" },
    description: {
      es: "Aplicación de búsqueda de gifs. Implementación de búsqueda y almacenamiento de gifs. Despliegue en Vercel",
      en: "Gif search application. Gif search and storage implementation. Deployment on Vercel",
    },
  },
  {
    id: "10",
    slug: "cripto-cotizador",
    category: "web",
    technologies: ["Vue.js", "API", "Vercel", "TypeScript"],
    github: "https://github.com/crycodex/curso_vuejs3/tree/main/07_criptocotizador",
    demo: "https://criptocotizador-isnotcristhianrs-projects.vercel.app/",
    title: { es: "CriptoCotizador - API de Criptomonedas", en: "CriptoCotizador - Cryptocurrency API" },
    description: {
      es: "App de cotización de criptomonedas. Implementación de búsqueda de criptomonedas y almacenamiento de cotizaciones. Despliegue en Vercel",
      en: "Cryptocurrency quotation app. Cryptocurrency search and quotation storage implementation. Deployment on Vercel",
    },
  },
  {
    id: "11",
    slug: "pinia-store",
    category: "web",
    technologies: ["Vue.js", "Pinia", "Vercel", "Ecommerce"],
    github: "https://github.com/crycodex/curso_vuejs3/tree/main/10_pinieaStore",
    demo: "https://01-vue-js.vercel.app/",
    title: { es: "Pinia Store - Ecommerce", en: "Pinia Store - Ecommerce" },
    description: {
      es: "Tienda online de productos tecnológicos. Implementación de carrito de compras y búsqueda de productos. Despliegue en Vercel",
      en: "Online technology products store. Shopping cart and product search implementation. Deployment on Vercel",
    },
  },
  {
    id: "12",
    slug: "laravel-hotel",
    category: "backend",
    technologies: ["Laravel", "PHP", "MySQL", "Backend"],
    github: "https://github.com/crycodex/Laravel-Hotel",
    title: { es: "Laravel Hotel - Sistema de Reservas", en: "Laravel Hotel - Booking System" },
    description: {
      es: "Sistema de reservas de habitaciones de hotel. Implementación de reservas y búsqueda de habitaciones. Despliegue en servidor local",
      en: "Hotel room booking system. Reservations and room search implementation. Local server deployment",
    },
  },
  {
    id: "13",
    slug: "cielo-verde",
    category: "web",
    technologies: ["Web", "Database", "Academic Management"],
    github: "https://github.com/crycodex/CieloVerde",
    demo: "https://cieloverdespanishschool.com/",
    title: { es: "Cielo Verde Spanish School", en: "Cielo Verde Spanish School" },
    description: {
      es: "Sistema de gestión de estudiantes para la escuela de español Cielo Verde. Matrículas, pagos, etc. Despliegue en servidor web",
      en: "Student management system for Cielo Verde Spanish school. Enrollments, payments, etc. Web server deployment",
    },
  },
  {
    id: "14",
    slug: "hotel-mongo",
    category: "backend",
    technologies: ["MongoDB", "Node.js", "Backend"],
    github: "https://github.com/crycodex/sistema-hotel-mongo",
    demo: "https://hotel-booking-web-app.vercel.app/",
    title: { es: "Hotel Mongo DB", en: "Hotel Mongo DB" },
    description: {
      es: "Sistema de reservas de habitaciones de hotel. Implementación de reservas y búsqueda de habitaciones. Despliegue en servidor local",
      en: "Hotel room booking system. Reservations and room search implementation. Local server deployment",
    },
  },
  {
    id: "15",
    slug: "gestion-documental",
    category: "backend",
    technologies: ["Backend", "Database", "Reports", "Document Management"],
    github: "https://github.com/crycodex/SistemaGestionDocumental",
    demo: "https://www.pucei.edu.ec:441/DirectorioAplicaciones/",
    title: { es: "Gestión Documental PUCE-I", en: "Document Management PUCE-I" },
    description: {
      es: "Sistema de gestión documental para la Pontificia Universidad Católica del Ecuador - Ibarra. Reportes de estudiantes matriculados y graduados desde 1976 hasta 2023. Despliegue en servidor local",
      en: "Document management system for Pontificia Universidad Católica del Ecuador - Ibarra. Reports for enrolled and graduated students from 1976 to 2023. Local server deployment",
    },
    longDescription: {
      es: "Sistema de gestión documental para la PUCE-I con reportes de estudiantes matriculados y graduados desde 1976 hasta 2023, desplegado en servidores locales.",
      en: "Document management system for PUCE-I with reports for enrolled and graduated students from 1976 to 2023, deployed on local servers.",
    },
  },
  {
    id: "16",
    slug: "pokemon-api",
    category: "web",
    technologies: ["React", "API", "Pokemon API", "TypeScript"],
    github: "https://github.com/crycodex/apiPokemon",
    demo: "https://crycodex.github.io/apiPokemon/",
    title: { es: "Pokedex - API de Pokemon", en: "Pokedex - Pokemon API" },
    description: {
      es: "Aplicación de búsqueda de Pokemon. Implementación de búsqueda y almacenamiento de Pokemon. Despliegue web",
      en: "Pokemon search application. Pokemon search and storage implementation. Web deployment",
    },
  },
  {
    id: "17",
    slug: "instagram-clone",
    category: "web",
    technologies: ["React", "Firebase", "Firebase Hosting", "Authentication"],
    github: "https://github.com/crycodex/curso_vuejs3/tree/main/11_Instagram",
    demo: "https://instagram-clone-eta-inky.vercel.app/",
    title: { es: "Clon de Instagram - Ideas y Tendencias", en: "Instagram Clone - Ideas and Trends" },
    description: {
      es: "Aplicación clon de Instagram. Implementación de autenticación, comentarios y subida de imágenes. Despliegue en Firebase Hosting",
      en: "Instagram clone application. Authentication, comments and image upload implementation. Deployment on Firebase Hosting",
    },
    longDescription: {
      es: "Aplicación clon de Instagram con autenticación, comentarios y subida de imágenes, desplegada en Firebase Hosting.",
      en: "Instagram clone application with authentication, comments and image upload, deployment on Firebase Hosting.",
    },
  },
  {
    id: "18",
    slug: "gdg-guayaquil-figma",
    category: "design",
    technologies: ["Figma", "UX/UI", "Prototyping", "Accessibility"],
    github: "https://github.com/crycodex/GDG-Guayaquill-Figma",
    title: { es: "GDG Guayaquil - Diseño UX/UI", en: "GDG Guayaquil - UX/UI Design" },
    description: {
      es: "Diseño de interfaz y experiencia de usuario para la comunidad Google Developers Group Guayaquil. Prototipado y pruebas de usabilidad. Implementación de diseño responsive y accesibilidad.",
      en: "User interface and experience design for Google Developers Group Guayaquil community. Prototyping and usability testing. Responsive design and accessibility implementation.",
    },
  },
  {
    id: "19",
    slug: "backend-app",
    category: "backend",
    technologies: ["Firebase", "Node.js", "API", "Authentication"],
    featured: true,
    title: { es: "Backend de App Móvil", en: "Mobile App Backend" },
    description: {
      es: "Aplicación de intercambio. Implementación de servicios de autenticación y almacenamiento. Despliegue en Firebase",
      en: "Exchange application. Authentication and storage services implementation. Firebase deployment",
    },
  },
  {
    id: "20",
    slug: "firebase-cicd",
    category: "backend",
    technologies: ["Firebase", "Firebase Hosting", "CI/CD"],
    title: { es: "Firebase Web Hosting", en: "Firebase Web Hosting" },
    description: {
      es: "Alojamiento de aplicaciones web en Firebase. Implementación de servicios de autenticación y almacenamiento. Despliegue en Firebase",
      en: "Web application hosting on Firebase. Authentication and storage services implementation. Firebase deployment",
    },
  },
  {
    id: "21",
    slug: "registro-pucesi",
    category: "web",
    technologies: ["Web", "Forms", "Registration"],
    demo: "https://www.pucesi.edu.ec/web/noticias/?p=4706",
    title: { es: "Creatibot - Web de Registro", en: "Creatibot - Registration Web" },
    description: {
      es: "Web de registro. Implementación de servicios de registro y formularios. Despliegue local",
      en: "Registration web. Registration services and forms implementation. Local deployment",
    },
  },
  {
    id: "22",
    slug: "filtro-vintage",
    category: "ar",
    technologies: ["Spark AR", "Instagram", "Facebook", "Image Processing"],
    github: "https://github.com/crycodex/Filtro-Vintage-Instagram",
    title: { es: "Filtro Vintage de Instagram", en: "Vintage Instagram Filter" },
    description: {
      es: "Filtro de imagen para Instagram, implementación de herramientas de procesamiento de imágenes. Despliegue en Instagram y Facebook",
      en: "Instagram image filter, image processing tools implementation. Deployment on Instagram and Facebook",
    },
  },
  {
    id: "23",
    slug: "filtro-indie",
    category: "ar",
    technologies: ["Spark AR", "Instagram", "Facebook", "Image Processing"],
    github: "https://github.com/crycodex/Filtro-Indie-Instagram",
    title: { es: "Filtro Indie de Instagram", en: "Indie Instagram Filter" },
    description: {
      es: "Filtro de imagen para Instagram, implementación de herramientas de procesamiento de imágenes. Despliegue en Instagram y Facebook",
      en: "Instagram image filter, image processing tools implementation. Deployment on Instagram and Facebook",
    },
  },
  {
    id: "24",
    slug: "filtro-glitch",
    category: "ar",
    technologies: ["Spark AR", "Instagram", "Facebook", "Image Processing"],
    github: "https://github.com/crycodex/Flitro-Glitch-Instagram",
    title: { es: "Filtro Glitch de Instagram", en: "Glitch Instagram Filter" },
    description: {
      es: "Filtro de imagen para Instagram, implementación de herramientas de procesamiento de imágenes. Despliegue en Instagram y Facebook",
      en: "Instagram image filter, image processing tools implementation. Deployment on Instagram and Facebook",
    },
  },
  {
    id: "25",
    slug: "filtro-astigma",
    category: "ar",
    technologies: ["Spark AR", "Instagram", "Facebook", "Image Processing"],
    demo: "https://github.com/crycodex/Filtro-Astigma-Instagram",
    title: { es: "Filtro Astigma de Instagram", en: "Astigma Instagram Filter" },
    description: {
      es: "Filtro de imagen para Instagram, implementación de herramientas de procesamiento de imágenes. Despliegue en Instagram y Facebook",
      en: "Instagram image filter, image processing tools implementation. Deployment on Instagram and Facebook",
    },
  },
  {
    id: "26",
    slug: "venturex",
    category: "web",
    technologies: ["React", "TypeScript", "Vercel", "API", "Statistics"],
    github: "https://github.com/rszaldumbide/venturex",
    demo: "https://venturex-seven.vercel.app/",
    title: { es: "Venturex - Plataforma de Comercio Internacional", en: "Venturex - International Trade Platform" },
    description: {
      es: "Consultas estadísticas de productos de diferentes países. Implementación de búsqueda de datos globales. Despliegue en Vercel",
      en: "Statistical product queries from different countries. Global data search implementation. Vercel deployment",
    },
    longDescription: {
      es: "Plataforma de comercio internacional con consultas estadísticas de productos de diferentes países, búsqueda global y despliegue en Vercel.",
      en: "International trade platform with statistical product queries from different countries, global search and Vercel deployment.",
    },
  },
  {
    id: "27",
    slug: "binesai",
    category: "web",
    technologies: ["Web", "Forms", "Storage"],
    github: "https://github.com/crycodex/binesai",
    demo: "https://binesai.vercel.app/",
    title: { es: "Binesai - Web de la Bienal de Arte", en: "Binesai - Art Biennial Web" },
    description: {
      es: "Sitio web para la Bienal de Arte de San Antonio de Ibarra 2025. Implementación de formulario de contacto, almacenamiento de datos, etc. Despliegue web",
      en: "Website for the San Antonio de Ibarra Art Biennial 2025. Contact form implementation, data storage, etc. Web deployment",
    },
  },
  {
    id: "28",
    slug: "swapme",
    category: "mobile",
    technologies: ["Flutter", "Dart", "Firebase", "Android", "iOS"],
    featured: true,
    github: "https://github.com/crycodex/swapme",
    demo: "https://play.google.com/store/apps/details?id=com.swapapp.me",
    title: { es: "Swapme 2.0 - App de Intercambio de Ropa", en: "Swapme 2.0 - Clothing Swap App" },
    description: {
      es: "App móvil de intercambio de ropa renovada con nuevas funciones. Implementación de servicios de autenticación y almacenamiento.",
      en: "Mobile app for clothing swap renewed with new features. Authentication and storage services implementation.",
    },
    longDescription: {
      es: "App móvil de intercambio de ropa renovada con nuevas funciones, incluyendo autenticación, servicios de almacenamiento y despliegue en Google Play Store y App Store.",
      en: "Mobile app for clothing swap renewed with new features including authentication, storage services and deployment on Google Play Store and App Store.",
    },
  },
  {
    id: "29",
    slug: "flutter-localstorage",
    category: "mobile",
    technologies: ["Flutter", "Dart", "LocalStorage"],
    title: { es: "Count App - Aplicación Contador", en: "Count App - Counter Application" },
    description: {
      es: "App móvil para la gestión de contadores.",
      en: "Mobile app for counter management.",
    },
    longDescription: {
      es: "App móvil para la gestión de contadores con servicios de almacenamiento localStorage.",
      en: "Mobile app for counter management with localStorage storage services.",
    },
  },
  {
    id: "30",
    slug: "app-counter",
    category: "mobile",
    technologies: ["Flutter", "Dart", "LocalStorage", "Android", "iOS"],
    github: "https://github.com/crycodex/App-Counter",
    demo: "https://play.google.com/store/apps/details?id=com.isnotcristhianr.app_counter",
    title: { es: "ChatSimulator - Chatbot de Simulación", en: "ChatSimulator - Simulation Chatbot" },
    description: {
      es: "Chatbot de simulación. Implementación de chatbot local entre dos usuarios.",
      en: "Simulation chatbot. Local chatbot implementation between two users.",
    },
    longDescription: {
      es: "Chatbot de simulación con IA. Implementación de chatbot local entre dos usuarios y despliegue en App Store y Google Play Store.",
      en: "AI simulation chatbot. Local chatbot implementation between two users and deployment on App Store and Google Play Store.",
    },
  },
  {
    id: "31",
    slug: "handia",
    category: "web",
    technologies: ["React", "TypeScript", "Vercel", "API", "Chatbot"],
    featured: true,
    github: "https://github.com/crycodex/handIA_landing",
    demo: "https://hand-ia-landing-5jxg.vercel.app/",
    title: { es: "Hand IA - Landing Page", en: "Hand IA - Landing Page" },
    description: {
      es: "Landing page para la aplicación Hand IA.",
      en: "Landing page for the Hand IA application.",
    },
    longDescription: {
      es: "Landing page para la aplicación Hand IA con secciones informativas, política de privacidad y términos de uso, etc. Despliegue web",
      en: "Landing page for the Hand IA application with info sections, privacy policy and terms of use, etc. Web deployment",
    },
  },
  {
    id: "32",
    slug: "spotify-clone",
    category: "web",
    technologies: ["React", "TypeScript", "Vercel", "API", "Spotify"],
    github: "https://github.com/crycodex/spotify_clon",
    demo: "https://spotify-clon-khaki.vercel.app/",
    title: { es: "Clon de Spotify - App de Reproducción de Música", en: "Spotify Clone - Music Playback App" },
    description: {
      es: "Aplicación de reproducción de música. Implementación de reproducción y almacenamiento de música, etc.",
      en: "Music playback application. Music playback and storage implementation, etc.",
    },
    longDescription: {
      es: "Aplicación de reproducción de música con servicios de autenticación, almacenamiento y despliegue web. Integración con la API de Spotify.",
      en: "Music playback application with authentication services, storage and web deployment. Spotify API integration.",
    },
  },
  {
    id: "33",
    slug: "agroindustrias-equatorial",
    category: "web",
    technologies: ["React", "TypeScript", "Vercel", "API"],
    github: "https://github.com/crycodex/agreqtlr",
    demo: "https://www.agroindustriasequatorial.com/",
    title: { es: "Agroindustrias Equatorial - Landing Page", en: "Agroindustrias Equatorial - Landing Page" },
    description: {
      es: "Landing page para Agroindustrias Equatorial para licores k-os",
      en: "Landing page for Agroindustrias Equatorial for k-os spirits",
    },
    longDescription: {
      es: "Landing page para Agroindustrias Equatorial para licores k-os de la provincia de Imbabura con secciones informativas, productos, etc. Despliegue web",
      en: "Landing page for Agroindustrias Equatorial for k-os spirits from Imbabura province with info sections, products, etc. Web deployment",
    },
  },
  {
    id: "34",
    slug: "simulador",
    category: "web",
    technologies: ["Vue.js", "TypeScript", "Vercel", "Tailwind CSS", "Pinia"],
    github: "https://github.com/crycodex/simulador",
    demo: "https://simulador-rho.vercel.app/",
    title: { es: "Simulador de Examen de Biotecnología", en: "Biotechnology Review Test Simulator" },
    description: {
      es: "Simulador de examen de repaso de biotecnología. Implementación de servicios de autenticación y almacenamiento, etc.",
      en: "Biotechnology review test simulator. Authentication and storage services implementation, etc.",
    },
    longDescription: {
      es: "Simulador de examen de repaso de biotecnología con autenticación, servicios de almacenamiento, etc. Despliegue web",
      en: "Biotechnology review test simulator with authentication, storage services, etc. Web deployment",
    },
  },
  {
    id: "35",
    slug: "tribbe-landing",
    category: "web",
    technologies: ["React", "TypeScript", "Vercel", "Tailwind CSS", "React Router"],
    github: "https://github.com/crycodex/tribbe_landing",
    demo: "https://tribbe-landing.vercel.app/",
    title: { es: "Tribbe App - Landing Page", en: "Tribbe App - Landing Page" },
    description: {
      es: "Landing page para la aplicación Tribbe.",
      en: "Landing page for the Tribbe application.",
    },
    longDescription: {
      es: "Landing page para la aplicación Tribbe con secciones informativas, política de privacidad y términos de uso, etc. Despliegue web",
      en: "Landing page for the Tribbe application with info sections, privacy policy and terms of use, etc. Web deployment",
    },
  },
  {
    id: "36",
    slug: "swapme-landing",
    category: "web",
    technologies: ["React", "TypeScript", "Vercel", "Tailwind CSS", "React Router"],
    github: "https://github.com/crycodex/swapme-landing",
    demo: "https://swapme-landing.vercel.app/",
    title: { es: "Swapme 2.0 - Landing Page", en: "Swapme 2.0 - Landing Page" },
    description: {
      es: "Landing page para la aplicación Swapme 2.0.",
      en: "Landing page for the Swapme 2.0 application.",
    },
    longDescription: {
      es: "Landing page para la aplicación Swapme 2.0 con secciones informativas, política de privacidad y términos de uso, etc. Despliegue web",
      en: "Landing page for the Swapme 2.0 application with info sections, privacy policy and terms of use, etc. Web deployment",
    },
  },
  {
    id: "37",
    slug: "cinespot",
    category: "web",
    technologies: ["React", "TypeScript", "Vercel", "Tailwind CSS", "React Router", "React Query"],
    github: "https://github.com/crycodex/cinespot-light",
    demo: "https://cinespot-light.vercel.app/",
    title: { es: "Cinnemapedia App - Landing Page", en: "Cinnemapedia App - Landing Page" },
    description: {
      es: "Landing page para la aplicación Cinnemapedia.",
      en: "Landing page for the Cinnemapedia application.",
    },
    longDescription: {
      es: "Landing page para la aplicación Cinnemapedia con secciones informativas, política de privacidad y términos de uso, etc. Despliegue web",
      en: "Landing page for the Cinnemapedia application with info sections, privacy policy and terms of use, etc. Web deployment",
    },
  },
  {
    id: "38",
    slug: "ionoshub",
    category: "web",
    technologies: ["React", "TypeScript", "Vercel", "Tailwind CSS", "React Router", "React Query"],
    featured: true,
    github: "https://github.com/crycodex/ionos-hub-connect",
    demo: "https://www.ionoshub.net",
    title: { es: "IonosHub - Landing Page", en: "IonosHub - Landing Page" },
    description: {
      es: "Landing page de IonosHub centrada en la simplicidad y la eficiencia.",
      en: "IonosHub landing page focused on simplicity and efficiency.",
    },
    longDescription: {
      es: "Landing page de IonosHub centrada en la simplicidad y la eficiencia para servicios. Despliegue web",
      en: "IonosHub landing page focused on simplicity and efficiency for services. Web deployment",
    },
  },
  {
    id: "39",
    slug: "kp8",
    category: "web",
    technologies: ["Next.js", "TypeScript", "Vercel", "Tailwind CSS", "LocalStorage"],
    github: "https://github.com/crycodex/kp8",
    demo: "https://kp8.vercel.app/",
    title: { es: "Dashboard de Proyectos - CRUD", en: "Projects Dashboard - CRUD" },
    description: {
      es: "Dashboard de proyectos con CRUD. Implementación de servicios de autenticación y almacenamiento, etc.",
      en: "Projects dashboard with CRUD. Authentication and storage services implementation, etc.",
    },
    longDescription: {
      es: "Dashboard de proyectos con CRUD incluyendo autenticación, servicios de almacenamiento, etc. Despliegue web",
      en: "Projects dashboard with CRUD including authentication, storage services, etc. Web deployment",
    },
  },
  {
    id: "40",
    slug: "spacex-launch",
    category: "web",
    technologies: ["Astro", "TypeScript", "Vercel", "Tailwind CSS", "Server Side Rendering"],
    github: "https://github.com/crycodex/astro-demo",
    demo: "https://spacex-launch-iota.vercel.app/",
    title: { es: "Space X - Landing Page", en: "Space X - Landing Page" },
    description: {
      es: "Landing page de lanzamientos de cohetes de Space X.",
      en: "Space X rocket launches landing page.",
    },
    longDescription: {
      es: "Landing page de lanzamientos de cohetes de Space X. Despliegue web",
      en: "Space X rocket launches landing page. Web deployment",
    },
  },
  {
    id: "41",
    slug: "iglu-sweet-spot",
    category: "web",
    technologies: ["React", "TypeScript", "Vercel", "Tailwind CSS", "React Router", "React Query"],
    github: "https://github.com/crycodex/iglu-sweet-spot",
    demo: "https://iglu-sweet-spot.vercel.app/",
    title: { es: "Iglu Coffee - Landing Page", en: "Iglu Coffee - Landing Page" },
    description: {
      es: "Landing page para Iglu Coffee.",
      en: "Landing page for Iglu Coffee.",
    },
    longDescription: {
      es: "Landing page para Iglu Coffee con secciones informativas, menú y promociones, etc. Despliegue web",
      en: "Landing page for Iglu Coffee with info sections, menu and promotions, etc. Web deployment",
    },
  },
  {
    id: "42",
    slug: "el-chipotle",
    category: "web",
    technologies: ["React", "TypeScript", "Vercel", "Tailwind CSS", "React Router", "React Query"],
    github: "https://github.com/crycodex/el-chipotle",
    demo: "https://el-chipotle.vercel.app/",
    title: { es: "El chipotle - Landing Page", en: "El chipotle - Landing Page" },
    description: {
      es: "Landing page para El chipotle.",
      en: "Landing page for El chipotle.",
    },
    longDescription: {
      es: "Landing page para El chipotle con secciones informativas, menú y promociones, etc. Despliegue web",
      en: "Landing page for El chipotle with info sections, menu and promotions, etc. Web deployment",
    },
  },
  {
    id: "43",
    slug: "tribbe",
    category: "mobile",
    technologies: ["Flutter", "Dart", "Firebase", "iOS"],
    featured: true,
    github: "https://github.com/crycodex/tribbe_app",
    demo: "https://apps.apple.com/no/app/tribbe/id6754004167",
    title: { es: "Tribbe - App", en: "Tribbe - App" },
    description: {
      es: "Aplicación Tribbe para gimnasios y registros.",
      en: "Tribbe application for gyms and records.",
    },
    longDescription: {
      es: "Aplicación Tribbe con secciones informativas, menú y promociones, etc. Despliegue en Google Play Store y App Store",
      en: "Tribbe application with info sections, menu and promotions, etc. Deployment on Google Play Store and App Store",
    },
  },
];

const byId = new Map(projects.map((p) => [p.id, p]));
const bySlug = new Map(projects.map((p) => [p.slug, p]));

export function getProjectMetaBySlug(slug: string): ProjectMeta | undefined {
  return bySlug.get(slug);
}

export function getProjectMetaById(id: string): ProjectMeta | undefined {
  return byId.get(id);
}

/** A localized, render-ready project (used by cards and the "all projects" page). */
export interface ProjectView {
  id: string;
  slug: string;
  category: ProjectCategory;
  technologies: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  title: string;
  description: string;
  thumbnail: string;
}

export function projectThumbnail(id: string): string {
  return `/img/projects/${id}.webp`;
}

export function toView(meta: ProjectMeta, locale: Locale): ProjectView {
  return {
    id: meta.id,
    slug: meta.slug,
    category: meta.category,
    technologies: meta.technologies,
    github: meta.github,
    demo: meta.demo,
    featured: meta.featured,
    title: meta.title[locale],
    description: meta.description[locale],
    thumbnail: projectThumbnail(meta.id),
  };
}

export function getProjects(locale: Locale): ProjectView[] {
  return projects.map((p) => toView(p, locale));
}

export function getFeaturedProjects(locale: Locale, limit = 5): ProjectView[] {
  return projects
    .filter((p) => p.featured)
    .slice(0, limit)
    .map((p) => toView(p, locale));
}

export function getProjectsByCategory(locale: Locale, category: ProjectCategory): ProjectView[] {
  return projects.filter((p) => p.category === category).map((p) => toView(p, locale));
}
