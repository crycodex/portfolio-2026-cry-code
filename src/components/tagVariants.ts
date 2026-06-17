export type TagVariant =
  | "react"
  | "typescript"
  | "javascript"
  | "vue"
  | "vercel"
  | "flutter"
  | "dart"
  | "firebase"
  | "node"
  | "api"
  | "html"
  | "css"
  | "tailwind"
  | "php"
  | "mysql"
  | "mongodb"
  | "laravel"
  | "python"
  | "android"
  | "ios"
  | "sparkar"
  | "figma"
  | "adobexd"
  | "nextjs"
  | "astro"
  | "pinia"
  | "gray";

export const tagLabels = {
  react: "React",
  typescript: "TypeScript",
  javascript: "JavaScript",
  vue: "Vue.js",
  vercel: "Vercel",
  flutter: "Flutter",
  dart: "Dart",
  firebase: "Firebase",
  node: "Node.js",
  api: "API",
  html: "HTML",
  css: "CSS",
  tailwind: "Tailwind CSS",
  php: "PHP",
  mysql: "MySQL",
  mongodb: "MongoDB",
  laravel: "Laravel",
  python: "Python",
  android: "Android",
  ios: "iOS",
  sparkar: "Spark AR",
  figma: "Figma",
  adobexd: "Adobe XD",
  nextjs: "Next.js",
  astro: "Astro",
  pinia: "Pinia",
  gray: "Gray",
} as const satisfies Record<TagVariant, string>;

/**
 * Maps a normalized technology string (lowercased, alphanumerics only) to a
 * colored tag variant. Anything not listed falls back to the neutral "gray".
 */
const techToVariant: Record<string, TagVariant> = {
  react: "react",
  reactjs: "react",
  typescript: "typescript",
  javascript: "javascript",
  vue: "vue",
  vuejs: "vue",
  vercel: "vercel",
  flutter: "flutter",
  dart: "dart",
  firebase: "firebase",
  firebasehosting: "firebase",
  node: "node",
  nodejs: "node",
  api: "api",
  pokemonapi: "api",
  spotify: "api",
  html: "html",
  css: "css",
  tailwindcss: "tailwind",
  php: "php",
  mysql: "mysql",
  mongodb: "mongodb",
  laravel: "laravel",
  python: "python",
  android: "android",
  ios: "ios",
  sparkar: "sparkar",
  figma: "figma",
  adobexd: "adobexd",
  nextjs: "nextjs",
  astro: "astro",
  pinia: "pinia",
};

export function resolveTagVariant(tag: string): TagVariant {
  const key = tag.toLowerCase().replace(/[^a-z0-9]/g, "");
  return techToVariant[key] ?? "gray";
}
