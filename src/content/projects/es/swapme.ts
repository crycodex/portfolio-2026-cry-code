import image0 from "../../../assets/images/projects/sharkie/sharkie-0.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Swapme 2.0 - Aplicación de intercambio de Prendas de Vestir",
  theme: "light",
  tags: ["Flutter", "Dart", "Firebase"],
  source: "https://github.com/crycodex",
  description:
    "Aplicación móvil para intercambio de prendas de vestir renovada con nuevas funcionalidades.<br/><br/>Desarrollada con Flutter, Dart y Firebase para una experiencia multiplataforma escalable.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "Swapme 2.0",
        caption: "Swapme 2.0",
      },
    },
  ],
} as const satisfies ProjectContent;
