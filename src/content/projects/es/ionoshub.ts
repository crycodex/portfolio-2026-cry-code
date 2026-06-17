import image0 from "../../../assets/images/projects/cubewar/cubewar-0.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "IonosHub - Landing Page",
  theme: "dark",
  tags: ["React", "TypeScript", "Vercel"],
  live: "https://cry-code.vercel.app/",
  source: "https://github.com/crycodex",
  description:
    "Landing Page de IonosHub con enfoque en simplicidad y eficiencia.<br/><br/>Desarrollada con React, TypeScript y desplegada en Vercel para ofrecer una experiencia rápida y accesible.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "IonosHub Landing Page",
        caption: "IonosHub Landing Page",
      },
    },
  ],
} as const satisfies ProjectContent;
