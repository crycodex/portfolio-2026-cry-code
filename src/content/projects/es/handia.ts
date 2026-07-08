import type { ProjectContent } from "../../types";

export default {
  title: "Hand IA - Landing Page",
  theme: "light",
  tags: ["React", "TypeScript", "Vercel"],
  live: "https://hand-ia-landing-5jxg.vercel.app/",
  source: "https://github.com/crycodex",
  description:
    "Landing Page de la aplicación Hand IA.<br/><br/>Interfaz moderna construida con React y TypeScript, optimizada para conversión y despliegue en Vercel.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: "/img/projects/31.webp",
        alt: "Hand IA Landing Page",
        caption: "Hand IA Landing Page",
      },
    },
  ],
} as const satisfies ProjectContent;
