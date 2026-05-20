import image0 from "../../../assets/images/projects/quibbo/quibbo-0.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Hand IA - Landing Page",
  theme: "light",
  tags: ["react", "typescript", "vercel"],
  live: "https://cry-code.vercel.app/",
  source: "https://github.com/crycodex",
  description:
    "Landing Page de la aplicación Hand IA.<br/><br/>Interfaz moderna construida con React y TypeScript, optimizada para conversión y despliegue en Vercel.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "Hand IA Landing Page",
        caption: "Hand IA Landing Page",
      },
    },
  ],
} as const satisfies ProjectContent;
