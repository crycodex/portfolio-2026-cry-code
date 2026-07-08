import type { ProjectContent } from "../../types";

export default {
  title: "IonosHub - Landing Page",
  theme: "dark",
  tags: ["React", "TypeScript", "Vercel"],
  live: "https://www.ionoshub.net",
  source: "https://github.com/crycodex",
  description:
    "Landing Page de IonosHub con enfoque en simplicidad y eficiencia.<br/><br/>Desarrollada con React, TypeScript y desplegada en Vercel para ofrecer una experiencia rápida y accesible.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: "/img/projects/38.webp",
        alt: "IonosHub Landing Page",
        caption: "IonosHub Landing Page",
      },
    },
  ],
} as const satisfies ProjectContent;
