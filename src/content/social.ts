export const social = [
  { url: "mailto:cry.code@mail.com", name: "mail" },
  { url: "https://github.com/crycodex", name: "github" },
  { url: "https://www.linkedin.com/in/isnotcristhianr/", name: "linkedin" },
  { url: "https://www.instagram.com/cry.code/", name: "instagram" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];

export const socialLinks = {
  github: "https://github.com/crycodex",
  youtube: "https://www.youtube.com/@cry_code",
} as const;
