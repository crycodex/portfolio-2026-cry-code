import image0 from "../../../assets/images/projects/cubewar/cubewar-0.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "IonosHub - Landing Page",
  theme: "dark",
  tags: ["React", "TypeScript", "Vercel"],
  live: "https://cry-code.vercel.app/",
  source: "https://github.com/crycodex",
  description:
    "IonosHub landing page focused on simplicity and efficiency.<br/><br/>Built with React and TypeScript, deployed on Vercel for a fast, accessible experience.",
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
