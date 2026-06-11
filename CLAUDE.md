# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # start dev server on http://localhost:3000
pnpm build        # type-check + production build → ./dist
pnpm preview      # serve the production build locally
pnpm typecheck    # type-check only (vue-tsc), no emit
```

No test runner is configured. There is no lint script; Prettier handles formatting via `.prettierrc`.

## Architecture

This is a Vue 3 + TypeScript single-page portfolio site with a heavy Three.js 3D scene and GSAP-driven scroll animations. There is **no router library** — routing is a custom `history.pushState` patch in `src/composables/useRouteObserver.ts`.

### Two-page overlay model

The app renders two full-screen layers simultaneously:
- **Home** (`src/features/home/`) — the main scrollable page with an embedded Three.js canvas
- **Project** (`src/features/projects/`) — overlaid as a fixed layer (`z-index: 70`), shown/hidden via CSS visibility

Navigation between them happens by mutating `window.location` with `pushState`, which fires a `route-change` event caught by `useRouteObserver`. The `projectVisible` computed ref drives both layer visibility and Three.js renderer pause (`renderer.setIsActive`).

### Three.js layer (`src/three/`)

Initialised inside `Home.vue` via `three.init(canvas)` once resources are ready. Singleton modules:
- `core/` — camera, renderer, render-target (used for portal effects)
- `objects/` — 3D scene objects: `room`, `avatar`, `lab`, `contact`, `dark-plane`, `grid-floor`, `digital-numbers`
- `shaders/` — raw GLSL loaded via `vite-plugin-glsl`; each object has its own vertex/fragment pair

Resources (GLB models + textures) are defined in `src/sources.ts` and loaded by `src/utils/resources.ts` (EventEmitter-based, fires `ready` / `progress`). The preloader in `App.vue` blocks rendering until all assets resolve.

### Animation system (`src/animations/`)

Built entirely on GSAP. Two subsystems run every `gsap.ticker` frame:
- **scenes** (`scenes.ts`) — maintains `sceneWeights` (0–1 per section) computed from scroll-driven `in`/`out` values
- **waypoints** (`waypoints.ts`) — lerps Three.js camera between named positions using weighted averages of active scenes

Section transitions are triggered by `ScrollTrigger` in `animations/transitions/`. The intro sequence runs once on first load (`intro.ts`). `animations.init()` / `animations.destroy()` are called from `Home.vue` lifecycle hooks.

### Routing & i18n

- **Routing**: manual `pushState` + `popstate` listener in `useRouteObserver.ts`. Project URLs follow `/project/:id`.
- **i18n**: custom, no library. Locale stored in `src/i18n/store.ts`. Translation namespaces are JSON files under `src/i18n/messages/namespaces/`. Project content lives in `src/content/projects/{en,es}/*.ts` — one file per project per locale. Supported locales: `en`, `es`.

### Styling

SCSS with CSS custom properties. Global design tokens live in `src/assets/styles/variables.scss` (spacing, typography, colours, z-indices, eases). Breakpoints and utility mixins are in `mixins.scss`; every `.vue` file gets `@use "/src/assets/styles/mixins.scss"` auto-injected by Vite (see `vite.config.ts`). Use `@include mixins.mq("md")` for responsive breakpoints.

Z-index layers (low → high): background (0) → layout (10) → header-home (20) → project-background (50) → layout-project (70) → header (90) → preloader (100).

### Sound system (`src/features/sounds/`)

Howler.js. Music (`useMusic`) and ambient sound effects (`useClickSounds`, `useHoverSounds`) are composables. Audio sprites for scene-specific sounds are defined in `definitions/sprites.ts`. Hover sounds are currently disabled in `App.vue`.

### Content authoring

To add or update portfolio content, edit:
- `src/content/projects/{en,es}/<slug>.ts` — full project detail
- `src/content/projects/previews/{en,es}.ts` — home-page card data
- `src/content/projects/index.ts` — add the slug to `projectIds` array
- `src/content/trajectory.ts`, `skills.ts`, `certifications.ts`, `talks.ts` — other sections
