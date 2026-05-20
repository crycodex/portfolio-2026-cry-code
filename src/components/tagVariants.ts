export type TagVariant =
  | "react"
  | "typescript"
  | "vercel"
  | "flutter"
  | "dart"
  | "firebase"
  | "node"
  | "api"
  | "gray";

export const tagLabels = {
  react: "React",
  typescript: "TypeScript",
  vercel: "Vercel",
  flutter: "Flutter",
  dart: "Dart",
  firebase: "Firebase",
  node: "Node.js",
  api: "API",
  gray: "Gray",
} as const satisfies Record<TagVariant, string>;
