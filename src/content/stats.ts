export type Award = {
  badge: { es: string; en: string };
  title: { es: string; en: string };
  subtitle: { es: string; en: string };
  when: { es: string; en: string };
  year?: string;
  variant?: "gold" | "brand";
};

export const awards: Award[] = [
  {
    badge: { es: "GOLD", en: "GOLD" },
    title: { es: "GANADOR", en: "WINNER" },
    subtitle: { es: "Mención de Honor", en: "Honorable Mention" },
    when: { es: "Torneo Tu App", en: "Tu App Tournament" },
    year: "2023",
    variant: "gold",
  },
  {
    badge: { es: "GDG", en: "GDG" },
    title: { es: "GANADOR", en: "WINNER" },
    subtitle: { es: "Challenge Build with AI", en: "Build with AI Challenge" },
    when: { es: "GDG Quito", en: "GDG Quito" },
    variant: "gold",
    year: "2026",
  },
] as const;
