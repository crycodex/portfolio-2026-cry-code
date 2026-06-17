import type { Locale } from "../i18n/types";

type Localized = Record<Locale, string>;

export interface Certification {
  id: string;
  /** Proper name — not localized. */
  title: string;
  issuer?: string;
  /** Iconify icon name, e.g. "logos:microsoft-icon". */
  icon?: string;
  /** Link to the credential. */
  url?: string;
  description: Localized;
}

export const certifications: Certification[] = [
  {
    id: "1",
    title: "Microsoft Certified AZ-900: Azure AI Fundamentals",
    issuer: "Microsoft",
    icon: "lucide:cloud",
    url: "https://learn.microsoft.com/api/credentials/share/es-es/CristhianRecalde-4665/10D25DF28F252BB7?sharingId=A2098A03866B3733",
    description: {
      es: "Fundamentos de Azure e inteligencia artificial: servicios en la nube, arquitectura de soluciones, seguridad, gestión de recursos y conceptos de IA en Microsoft.",
      en: "Azure and AI fundamentals: cloud services, solution architecture, security, resource management and AI concepts on Microsoft.",
    },
  },
  {
    id: "2",
    title: "Development Web II",
    issuer: "Google",
    icon: "lucide:code-xml",
    url: "https://drive.google.com/file/d/1Pg0lJnZtYOdj2Rv4q5SZsnA9ieFsBtm2/view?usp=sharing",
    description: {
      es: "Desarrollo web con HTML, CSS, JavaScript y buenas prácticas: estructuras, estilos, interactividad y fundamentos de SEO.",
      en: "Web development with HTML, CSS, JavaScript and best practices: structure, styling, interactivity and SEO fundamentals.",
    },
  },
  {
    id: "3",
    title: "Diseño Web con HTML5 y CSS3",
    issuer: "Movistar",
    icon: "lucide:palette",
    url: "https://drive.google.com/file/d/1s5PNJ8tnrnGJX66TqLs8ZWoCDnfUwMpD/view?usp=sharing",
    description: {
      es: "Maquetación y diseño web moderno con HTML5 y CSS3: semántica, layouts flexibles, animaciones y diseño responsive.",
      en: "Modern web layout and design with HTML5 and CSS3: semantics, flexible layouts, animations and responsive design.",
    },
  },
  {
    id: "4",
    title: "Administración Windows Server 2016",
    issuer: "Udemy",
    icon: "lucide:server",
    url: "https://drive.google.com/file/d/17DjdcP5cJCeFaJCk7IUUrXv-An8SK59B/view?usp=sharing",
    description: {
      es: "Instalación, configuración y administración de Windows Server 2016: Active Directory, DNS, DHCP, permisos y gestión de roles.",
      en: "Installation, configuration and administration of Windows Server 2016: Active Directory, DNS, DHCP, permissions and role management.",
    },
  },
  {
    id: "5",
    title: "VueJs 3 - Desde 0",
    issuer: "Udemy",
    icon: "lucide:braces",
    url: "https://drive.google.com/file/d/1SSqaYjPIGwO9LCkHOwUOZB4r7Yh6OIYE/view?usp=sharing",
    description: {
      es: "Desarrollo con Vue 3: Composition API, componentes reactivos, gestión de estado y mejores prácticas del ecosistema Vue.",
      en: "Development with Vue 3: Composition API, reactive components, state management and Vue ecosystem best practices.",
    },
  },
  {
    id: "6",
    title: "Canva 2021",
    issuer: "Canva",
    icon: "lucide:shapes",
    url: "https://drive.google.com/file/d/1XFul-8MKenI9U5yEAXVI1wfU2M9LE0xc/view?usp=sharing",
    description: {
      es: "Herramientas de diseño gráfico y creación de contenido visual con Canva: plantillas, tipografía, ilustraciones y publicación.",
      en: "Graphic design tools and visual content creation with Canva: templates, typography, illustrations and publishing.",
    },
  },
  {
    id: "7",
    title: "Canva 2022 - Diseño Gráfico desde 0",
    issuer: "Canva",
    icon: "lucide:pen-tool",
    url: "https://drive.google.com/file/d/15-w-aXigZS3A5ntW90r8cBZ5HCLQullv/view?usp=sharing",
    description: {
      es: "Diseño gráfico desde cero: composición, layouts, tipografía, color y branding. Creación de piezas para redes y marketing.",
      en: "Graphic design from scratch: composition, layouts, typography, color and branding. Creating assets for social media and marketing.",
    },
  },
  {
    id: "8",
    title: "Certificación Dominio Inglés B1",
    icon: "lucide:languages",
    url: "https://drive.google.com/file/d/1hLRlziymerWufhFDStiAXyZ-5MzAQceo/view?usp=sharing",
    description: {
      es: "Acreditación de nivel B1 de inglés según el Marco Común Europeo de Referencia: comprensión y expresión escrita y oral.",
      en: "B1 English proficiency accreditation per the Common European Framework of Reference: reading, writing, listening and speaking.",
    },
  },
  {
    id: "9",
    title: "Finanzas Inclusivas y Gobernanza",
    icon: "lucide:landmark",
    url: "https://drive.google.com/file/d/1SILN0o1_9j0vGyIGpW9Bw8vMoojG0ZuD/view?usp=sharing",
    description: {
      es: "Finanzas inclusivas, gobernanza corporativa y servicios financieros accesibles: marcos regulatorios y buenas prácticas.",
      en: "Inclusive finance, corporate governance and accessible financial services: regulatory frameworks and best practices.",
    },
  },
  {
    id: "10",
    title: "The Complete Google Chrome Extensions Developer Course",
    issuer: "Udemy",
    icon: "lucide:puzzle",
    url: "https://drive.google.com/file/d/1xj1ym_F29XURBNyC-dzIFR2cWtL7e1hL/view?usp=sharing",
    description: {
      es: "Desarrollo de extensiones para Google Chrome: Manifest V3, APIs de Chrome, almacenamiento, permisos y publicación en la Chrome Web Store.",
      en: "Google Chrome extension development: Manifest V3, Chrome APIs, storage, permissions and publishing to the Chrome Web Store.",
    },
  },
  {
    id: "11",
    title: "Cisco Security Cibernetics",
    issuer: "Cisco",
    icon: "lucide:shield-check",
    url: "https://drive.google.com/file/d/1JIQnpAAYXDI7NSi4Kw5Za_T433vXCSGy/view?usp=sharing",
    description: {
      es: "Seguridad cibernética y redes con enfoque Cisco: amenazas, defensa perimetral, firewalls y fundamentos de infraestructura segura.",
      en: "Cybersecurity and networking with a Cisco focus: threats, perimeter defense, firewalls and secure infrastructure fundamentals.",
    },
  },
  {
    id: "12",
    title: "Ciberseguridad en el Teletrabajo",
    issuer: "Google",
    icon: "lucide:shield",
    url: "https://drive.google.com/file/d/1qjoIofi6Nv-dxJOlE_uhweCsKgdPiRTh/view?usp=sharing",
    description: {
      es: "Buenas prácticas de ciberseguridad en entornos de teletrabajo: VPN, autenticación, protección de datos y concienciación.",
      en: "Cybersecurity best practices for remote work: VPN, authentication, data protection and awareness.",
    },
  },
  {
    id: "13",
    title: "IBM Optimization IBM CPLEX",
    issuer: "IBM",
    icon: "lucide:sigma",
    url: "https://drive.google.com/file/d/1iyLXRtB-1nmdipUvaerSAaO2HgwE4nvr/view?usp=sharing",
    description: {
      es: "Optimización y programación lineal con IBM ILOG CPLEX: modelado, resolución de problemas y aplicaciones en logística y planificación.",
      en: "Optimization and linear programming with IBM ILOG CPLEX: modeling, problem solving and applications in logistics and planning.",
    },
  },
  {
    id: "14",
    title: "Curso Completo de Computación",
    issuer: "Udemy",
    icon: "lucide:monitor",
    url: "https://drive.google.com/file/d/1nQgOLRjO5TDWXe5qW1mf0f72-UmhBpRj/view?usp=sharing",
    description: {
      es: "Fundamentos de computación, ofimática y uso de PC: sistema operativo, paquetes de oficina, internet y productividad digital.",
      en: "Computing fundamentals, office tools and PC usage: operating system, office suites, internet and digital productivity.",
    },
  },
  {
    id: "15",
    title: "Hacking Ético de redes WiFi",
    issuer: "HackerRank",
    icon: "lucide:wifi",
    url: "https://drive.google.com/file/d/1jf8d3kpZQ5z_1XJEH4eMMeuMcoGKUq0V/view?usp=sharing",
    description: {
      es: "Auditoría y seguridad de redes inalámbricas desde una perspectiva ética: análisis de vulnerabilidades, hardening y buenas prácticas.",
      en: "Wireless network auditing and security from an ethical perspective: vulnerability analysis, hardening and best practices.",
    },
  },
  {
    id: "16",
    title: "Python Guide Complete",
    issuer: "Udemy",
    icon: "lucide:terminal",
    url: "https://drive.google.com/file/d/13161HvvjKgpNJjCX_ynbGjgwiX8iD81n/view?usp=sharing",
    description: {
      es: "Programación en Python: sintaxis, estructuras de datos, POO, manejo de archivos y buenas prácticas para desarrollo y scripting.",
      en: "Python programming: syntax, data structures, OOP, file handling and best practices for development and scripting.",
    },
  },
  {
    id: "17",
    title: "Unesco IA Certificate",
    issuer: "UNESCO",
    icon: "lucide:sparkles",
    url: "https://drive.google.com/file/d/1jyAMjhspcFqi5fYIKF2L9ude47x8SvDc/view?usp=sharing",
    description: {
      es: "Inteligencia artificial según UNESCO: IA generativa, IA aplicada e IA responsable. Ética, sesgos y uso sostenible de la tecnología.",
      en: "Artificial intelligence per UNESCO: generative AI, applied AI and responsible AI. Ethics, bias and sustainable use of technology.",
    },
  },
  {
    id: "18",
    title: "Curso Completo de Windows 10/11",
    issuer: "Udemy",
    icon: "lucide:laptop",
    url: "https://drive.google.com/file/d/1CqoH3ZpovkhvbrtxoVtkL1UpkUOMJLf2/view?usp=sharing",
    description: {
      es: "Administración, configuración y productividad en Windows 10 y 11: sistema de archivos, seguridad, actualizaciones y optimización.",
      en: "Administration, configuration and productivity on Windows 10 and 11: file system, security, updates and optimization.",
    },
  },
];

export function getFeaturedCertifications(limit = 5): Certification[] {
  return certifications.slice(0, limit);
}
