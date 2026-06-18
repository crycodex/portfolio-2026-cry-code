# Portfolio (2026)

Personal portfolio site: project case studies, a Three.js 3D scene tying the sections together, and bilingual copy (English and Spanish).

Built with **Vue 3** + **TypeScript** + **Vite**. Motion via **GSAP** (+ **Lenis** for smooth scroll), 3D via **three.js**, audio via **Howler.js**. GLSL shaders are compiled through **vite-plugin-glsl**.

## Getting started

```bash
pnpm install
pnpm dev          # dev server on http://localhost:3000
```

| Command | Description |
| --- | --- |
| `pnpm dev` | Dev server on port **3000** (`strictPort`) |
| `pnpm build` | Type-check (`vue-tsc`) then production bundle to `dist/` |
| `pnpm preview` | Serve the production build locally |
| `pnpm typecheck` | Type-check only, no emit |

There's no test runner or lint script configured; Prettier handles formatting (`.prettierrc`).

## How the app is put together

There is **no router library**. Navigation is a custom `history.pushState` patch (`src/composables/useRouteObserver.ts`) that fires a `route-change` event. Two full-screen layers are always mounted:

- **Home** (`src/features/home/`) — the scrollable page with the embedded Three.js canvas.
- **Project** (`src/features/projects/`) — overlaid on top, shown/hidden via CSS visibility when a project route is active.

### 3D scene

`src/three/` holds the Three.js layer, initialised once assets are ready (`Home.vue`). Models and textures are declared in `src/sources.ts` and streamed in by `src/utils/resources.ts`; the app's preloader blocks rendering until everything resolves. Scene objects (room, avatar, lab, contact, grid floor, digital numbers...) live under `src/three/objects/`, each with its own GLSL pair under `src/three/shaders/`.

### Animation

Everything runs off `gsap.ticker`: `src/animations/scenes.ts` tracks per-section scroll weights, `src/animations/waypoints.ts` lerps the 3D camera between named positions based on those weights, and `ScrollTrigger` (`src/animations/transitions/`) drives the section transitions themselves.

### i18n

Custom, no library. Locale state lives in `src/i18n/store.ts`; translation strings are namespaced JSON under `src/i18n/messages/namespaces/`. Supported locales: `en`, `es`.

### Sound

Howler.js-backed composables under `src/features/sounds/` — background music (`useMusic`) and UI sound effects (`useClickSounds`, `useHoverSounds`), with sprite definitions in `definitions/sprites.ts`.

## Adding content

- **Projects**: one file per project per locale in `src/content/projects/{en,es}/<slug>.ts`, plus a matching entry in `projectIds` (`src/content/projects/index.ts`).
- **Home cards**: `src/content/projects/previews/{en,es}.ts`.
- **Other sections**: `src/content/trajectory.ts`, `skills.ts`, `certifications.ts`, `talks.ts`.
- **Tags**: variants/labels in `src/components/tagVariants.ts`.

See `CLAUDE.md` for a more detailed architecture reference.

## Credits & Attribution

This project was created and designed by David Heckhoff.

If you use this project or substantial parts of its source code as a base for your own portfolio or work, attribution must be preserved.

Please keep:

- existing credit comments in the source code
- this attribution section in the README
- a visible reference to the original project/repository in derivative works

Original portfolio:
-> https://david-hckh.com

Commercial reuse or redistribution of substantial portions of this project without permission is prohibited.
