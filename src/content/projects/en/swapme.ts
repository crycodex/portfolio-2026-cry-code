import image0 from "../../../assets/images/projects/sharkie/sharkie-0.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Swapme 2.0 - Clothing Exchange App",
  theme: "light",
  tags: ["flutter", "dart", "firebase"],
  source: "https://github.com/crycodex",
  description:
    "Mobile app for clothing exchange, renewed with new features.<br/><br/>Built with Flutter, Dart, and Firebase for a scalable cross-platform experience.",
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
