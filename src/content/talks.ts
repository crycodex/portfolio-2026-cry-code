export type TalkKind = "talk" | "podcast" | "workshop";

export type Talk = {
  title: { es: string; en: string };
  event: { es: string; en: string };
  kind: TalkKind;
  url?: string;
};

export const talks: Talk[] = [
  {
    title: { es: "De Flutter al Mundo: Un Roadmap Acelerado con IA como Aliada", en: "From Flutter to the World: An Accelerated Roadmap with AI" },
    event: { es: "GDG DevFest · Noviembre 2025", en: "GDG DevFest · November 2025" },
    kind: "talk",
  },
  {
    title: {
      es: "Apps que ven: Integrando Flutter con AWS Textract para resolver problemas reales",
      en: "Apps that see: Integrating Flutter with AWS Textract",
    },
    event: { es: "AWS Community Day 2025 · Octubre 2025", en: "AWS Community Day 2025 · October 2025" },
    kind: "talk",
  },
  {
    title: { es: "Construyendo productos sin dejarme la vida en el intento", en: "Building products without burning out" },
    event: { es: "DevLokos Podcast 2025 · Julio 2025", en: "DevLokos Podcast 2025 · July 2025" },
    kind: "podcast",
  },
  {
    title: { es: "Ep. 15 - El Camino del Desarrollador Flutter: Retos, IA y Producción", en: "Ep. 15 - The Flutter Developer Path: Challenges, AI and Production" },
    event: { es: "Océano de datos Podcast · Agosto 2025", en: "Ocean of Data Podcast · August 2025" },
    kind: "podcast",
  },
  {
    title: {
      es: "IA COMO COPILOTO: Mejorando el Diseño de Experiencia de Usuario con Cristhian Recalde",
      en: "AI AS COPILOT: Improving UX Design with Cristhian Recalde",
    },
    event: { es: "Conference HerUX · Septiembre 2025", en: "HerUX Conference · September 2025" },
    kind: "talk",
  },
  {
    title: { es: "Crea una app completa en una semana", en: "Build a complete app in one week" },
    event: { es: "ITSI Talleres Académicos Virtuales · Agosto 2025", en: "ITSI Virtual Workshops · August 2025" },
    kind: "workshop",
  },
  {
    title: { es: "Crea tu primera app con IA en Flutter...sin saber machine learning", en: "Build your first AI app in Flutter...without knowing ML" },
    event: { es: "Code On 2025 · Octubre 2025", en: "Code On 2025 · October 2025" },
    kind: "talk",
  },
  {
    title: { es: "Flutter y la IA: De Ibarra al Mundo", en: "Flutter and AI: From Ibarra to the World" },
    event: { es: "Flisol Guayaquil 2025 · Junio 2025", en: "Flisol Guayaquil 2025 · June 2025" },
    kind: "talk",
  },
  {
    title: { es: "Tecnología y Sociedad, la IA y su impacto en el desarrollo de software", en: "Technology, Society, and AI's impact on software development" },
    event: { es: "ADS Podcast · Diciembre 2025", en: "ADS Podcast · December 2025" },
    kind: "podcast",
  },
  {
    title: { es: "Flutter Conf Latam", en: "Flutter Conf Latam" },
    event: { es: "Flutter Conf 2025 · Septiembre 2025", en: "Flutter Conf 2025 · September 2025" },
    kind: "talk",
  },
];
