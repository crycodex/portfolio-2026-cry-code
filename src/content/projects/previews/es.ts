import thumbnailIonosHub from "../../../assets/thumbnails/cubewar.webp";
import thumbnailHandIa from "../../../assets/thumbnails/quibbo.webp";
import thumbnailSwapme from "../../../assets/thumbnails/sharkie.webp";
import thumbnailBackend from "../../../assets/thumbnails/streakon.webp";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "IonosHub - Landing Page",
    slug: "ionoshub",
    thumbnail: thumbnailIonosHub,
    description: "Landing Page de IonosHub enfocada en simplicidad y eficiencia.",
  },
  {
    title: "Hand IA - Landing Page",
    slug: "handia",
    thumbnail: thumbnailHandIa,
    description: "Landing Page de la aplicación Hand IA.",
  },
  {
    title: "Swapme 2.0",
    slug: "swapme",
    thumbnail: thumbnailSwapme,
    description: "App móvil para intercambio de prendas de vestir renovada.",
  },
  {
    title: "Backend App Móvil",
    slug: "backend-app",
    thumbnail: thumbnailBackend,
    description: "Backend con autenticación, almacenamiento y despliegue en Firebase.",
  },
] as const satisfies ProjectPreview[];
