import type { ProjectContent } from "../../types";

export default {
  title: "Swapme 2.0 - Clothing Exchange App",
  theme: "light",
  tags: ["Flutter", "Dart", "Firebase"],
  source: "https://github.com/crycodex",
  description:
    "Mobile app for clothing exchange, renewed with new features.<br/><br/>Built with Flutter, Dart, and Firebase for a scalable cross-platform experience.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: "/img/projects/28.webp",
        alt: "Swapme 2.0",
        caption: "Swapme 2.0",
      },
    },
  ],
} as const satisfies ProjectContent;
