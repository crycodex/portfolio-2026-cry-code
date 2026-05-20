import image0 from "../../../assets/images/projects/streakon/streakon-0.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Backend App Móvil",
  theme: "dark",
  tags: ["firebase", "node", "api"],
  source: "https://github.com/crycodex",
  description:
    "Aplicación de intercambios. Implementación de servicios de autenticación, almacenamiento y más.<br/><br/>Despliegue en Firebase con Node.js y APIs REST.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "Backend App Móvil",
        caption: "Backend App Móvil",
      },
    },
  ],
} as const satisfies ProjectContent;
