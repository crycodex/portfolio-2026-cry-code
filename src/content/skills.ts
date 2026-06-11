import type { TechSlug } from "../components/icons/techPaths";

export type Skill = {
  name: string;
  slug: TechSlug;
};

export const skills: Skill[] = [
  { name: "Flutter", slug: "flutter" },
  { name: "Kotlin", slug: "kotlin" },
  { name: "Swift", slug: "swift" },
  { name: "Dart", slug: "dart" },
  { name: "React", slug: "react" },
  { name: "Vue.js", slug: "vuedotjs" },
  { name: "TypeScript", slug: "typescript" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "Firebase", slug: "firebase" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "Docker", slug: "docker" },
  { name: "Git", slug: "git" },
  { name: "Supabase", slug: "supabase" },
  { name: "Python", slug: "python" },
  { name: "Astro", slug: "astro" },
  { name: "AWS", slug: "aws" },
  { name: "GCP", slug: "gcp" },
] as const;
