import { projectThumbnail } from "./data";

import type { Locale } from "../../i18n/types";
import type { ProjectContent } from "../types";
import type { ProjectMeta } from "./data";

/**
 * Builds a generic ProjectContent (used by the detail view) from flat project
 * metadata, for projects that don't have a hand-authored content file.
 */
export function buildProjectContent(meta: ProjectMeta, locale: Locale): ProjectContent {
  const description = (meta.longDescription ?? meta.description)[locale];

  return {
    title: meta.title[locale],
    theme: "light",
    tags: meta.technologies,
    description,
    live: meta.demo || undefined,
    source: meta.github || undefined,
    components: [
      {
        type: "media",
        props: {
          type: "image",
          src: projectThumbnail(meta.id),
          alt: meta.title[locale],
        },
      },
    ],
  };
}
