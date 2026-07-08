import type { ProjectContent } from "../../types";

export default {
  title: "Mobile App Backend",
  theme: "dark",
  tags: ["Firebase", "Node.js", "API"],
  source: "https://github.com/crycodex",
  description:
    "Exchange app backend with authentication, storage, and more.<br/><br/>Deployed on Firebase with Node.js and REST APIs.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: "/img/projects/19.webp",
        alt: "Mobile App Backend",
        caption: "Mobile App Backend",
      },
    },
  ],
} as const satisfies ProjectContent;
