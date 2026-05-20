export type TrajectoryRole = {
  title: { es: string; en: string };
  period: { es: string; en: string };
  description: { es: string; en: string };
};

export type TrajectoryEntry = {
  company: string;
  kind: "work" | "education";
  meta: { es: string; en: string };
  location: { es: string; en: string };
  roles: TrajectoryRole[];
};

export const trajectory: TrajectoryEntry[] = [
  {
    company: "HomeTeam Network",
    kind: "work",
    meta: { es: "Jornada completa · dic. 2025 - actualidad", en: "Full-time · Dec 2025 - present" },
    location: { es: "Ecuador · En remoto", en: "Ecuador · Remote" },
    roles: [
      {
        title: { es: "Mobile Developer", en: "Mobile Developer" },
        period: { es: "dic. 2025 - actualidad", en: "Dec 2025 - present" },
        description: {
          es: "Desarrollador Mobile Flutter, Swift y Kotlin enfocado a dar mantenimiento a los productos existentes, resolviendo bugs y actualizando las mismas para garantizar su mantenibilidad; además, liderar el desarrollo mobile la nueva app iScore 2026.",
          en: "Mobile developer working with Flutter, Swift, and Kotlin on product maintenance, bug fixing, and updates; leading mobile development for the new iScore 2026 app.",
        },
      },
    ],
  },
  {
    company: "Instituto Tecnológico Superior Ibarra",
    kind: "education",
    meta: { es: "Contrato temporal · may. 2025 - dic. 2025 · 8 meses", en: "Temporary contract · May 2025 - Dec 2025 · 8 months" },
    location: { es: "Ibarra, Imbabura, Ecuador · Presencial", en: "Ibarra, Imbabura, Ecuador · On-site" },
    roles: [
      {
        title: { es: "Docente Apps Móviles Multiplataforma", en: "Cross-Platform Mobile Apps Instructor" },
        period: { es: "may. 2025 - nov. 2025 · 7 meses", en: "May 2025 - Nov 2025 · 7 months" },
        description: {
          es: "Dirigí la formación de la nueva generación de desarrolladores móviles, impartiendo la asignatura de Aplicaciones Móviles con un enfoque práctico y orientado a proyectos. Diseñé e implementé un plan de estudios moderno centrado en Flutter y Firebase.",
          en: "Led training for a new generation of mobile developers with a project-based approach, designing a modern curriculum focused on Flutter and Firebase.",
        },
      },
      {
        title: {
          es: "Docente Sistemas Operativos, Gestión Base de Datos y Tecnologías Aplicadas",
          en: "OS, Database Management & Applied Technologies Instructor",
        },
        period: { es: "oct. 2025 - dic. 2025 · 3 meses", en: "Oct 2025 - Dec 2025 · 3 months" },
        description: {
          es: "Docente enfocado en clases prácticas con entregas, planificación de clases, control de estudiantes y mentorías personalizadas.",
          en: "Instructor focused on hands-on classes, lesson planning, student tracking, and personalized mentoring.",
        },
      },
    ],
  },
  {
    company: "NeaterNotes",
    kind: "work",
    meta: { es: "Jornada completa · sept. 2024 - sept. 2025 · 1 año 1 mes", en: "Full-time · Sep 2024 - Sep 2025 · 1 yr 1 mo" },
    location: { es: "En remoto", en: "Remote" },
    roles: [
      {
        title: { es: "Tech Lead Mobile Flutter", en: "Tech Lead Mobile Flutter" },
        period: { es: "feb. 2025 - sept. 2025 · 8 meses", en: "Feb 2025 - Sep 2025 · 8 months" },
        description: {
          es: "Integración de modelos con IA (OpenAI, Gemini). Publicación en Play Store y App Store. Chatbots, automatizaciones, suscripciones y roles con Stripe.",
          en: "AI model integration (OpenAI, Gemini). Play Store and App Store releases. Chatbots, automations, subscriptions and roles with Stripe.",
        },
      },
      {
        title: { es: "Desarrollador Mobile Flutter Full Stack", en: "Full Stack Mobile Flutter Developer" },
        period: { es: "nov. 2024 - feb. 2025 · 4 meses", en: "Nov 2024 - Feb 2025 · 4 months" },
        description: {
          es: "Integración de API REST, autenticación con Firebase y modelos OCR para scanner.",
          en: "REST API integration, Firebase authentication, and OCR models for scanning.",
        },
      },
      {
        title: { es: "Desarrollador Mobile Flutter", en: "Mobile Flutter Developer" },
        period: { es: "sept. 2024 - nov. 2024 · 3 meses", en: "Sep 2024 - Nov 2024 · 3 months" },
        description: {
          es: "Diseño de MVP de App NeaterNotes en Flutter. Integración de control de versiones y primeras versiones de prueba.",
          en: "NeaterNotes MVP design in Flutter. Version control integration and early test releases.",
        },
      },
    ],
  },
  {
    company: "Cry.code · Profesional independiente",
    kind: "work",
    meta: { es: "may. 2022 - actualidad", en: "May 2022 - present" },
    location: { es: "Ecuador", en: "Ecuador" },
    roles: [
      {
        title: { es: "Desarrollador de Software", en: "Software Developer" },
        period: { es: "may. 2022 - actualidad", en: "May 2022 - present" },
        description: {
          es: "Lideré esta iniciativa de desarrollo tecnológico independiente, supervisando el ciclo completo de vida de proyectos de software. Aplicaciones web y móviles personalizadas, marketing digital y filtros de Realidad Aumentada.",
          en: "Led this independent tech initiative, overseeing the full software lifecycle. Custom web and mobile apps, digital marketing, and AR filters for social media.",
        },
      },
    ],
  },
];
