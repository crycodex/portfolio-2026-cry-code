import type { ProjectContent } from "../../types";

export default {
  title: "Backend App Móvil",
  theme: "dark",
  tags: ["Firebase", "Node.js", "API"],
  source: "https://github.com/crycodex",
  description:
    "Aplicación de intercambios. Implementación de servicios de autenticación, almacenamiento y más.<br/><br/>Despliegue en Firebase con Node.js y APIs REST.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: "/img/projects/19.webp",
        alt: "Backend App Móvil",
        caption: "Backend App Móvil",
      },
    },
  ],
} as const satisfies ProjectContent;
