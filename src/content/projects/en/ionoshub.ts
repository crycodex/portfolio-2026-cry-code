import type { ProjectContent } from "../../types";

export default {
  title: "IonosHub - Landing Page",
  theme: "dark",
  tags: ["React", "TypeScript", "Vercel"],
  live: "https://www.ionoshub.net",
  source: "https://github.com/crycodex",
  description:
    "IonosHub landing page focused on simplicity and efficiency.<br/><br/>Built with React and TypeScript, deployed on Vercel for a fast, accessible experience.",
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
