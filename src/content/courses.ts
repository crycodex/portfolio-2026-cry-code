export type Course = {
  title: { es: string; en: string };
  description: { es: string; en: string };
  platform: string;
  instructor?: string;
  url: string;
  topics: string[];
};

export const courses: Course[] = [
  {
    title: { es: "Flutter: De cero a experto", en: "Flutter: From zero to expert" },
    description: {
      es: "Desarrollo de aplicaciones móviles completas con Flutter y Dart: arquitectura, estado, APIs y despliegue a producción.",
      en: "Building complete mobile applications with Flutter and Dart: architecture, state management, APIs, and production deployment.",
    },
    platform: "Udemy",
    instructor: "Cristhian Recalde",
    url: "https://www.udemy.com/course/curso-de-flutter-0-a-experto-apps-completas/",
    topics: ["Flutter", "Dart", "Mobile"],
  },
  {
    title: { es: "Vue.js: De cero a experto", en: "Vue.js: From zero to expert" },
    description: {
      es: "Proyectos reales con Vue.js: Composition API, Pinia, rutas, pruebas y aplicaciones listas para producción.",
      en: "Real-world projects with Vue.js: Composition API, Pinia, routing, testing, and production-ready applications.",
    },
    platform: "Udemy",
    instructor: "Cristhian Recalde",
    url: "https://www.udemy.com/course/vue-js-de-cero-a-experto-proyectos-reales/",
    topics: ["Vue.js", "TypeScript", "Web"],
  },
];
