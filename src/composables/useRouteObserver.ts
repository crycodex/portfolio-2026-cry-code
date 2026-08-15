import { ref, computed, onMounted, onUnmounted } from "vue";
import { isTransitioning } from "./useProjectTransition";
import { getProjectMetaBySlug } from "../content/projects/data";

// -----------------------------------------------------------------------------
// GLOBAL REACTIVE PATH
// -----------------------------------------------------------------------------

/** Strip trailing slash so /projects/ and /projects resolve the same. */
export const normalizePath = (pathname: string) => {
  if (!pathname || pathname === "/") return "/";
  return pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
};

export const path = ref(
  typeof window !== "undefined" ? normalizePath(window.location.pathname) : "/",
);

// -----------------------------------------------------------------------------
// COMPUTED HELPERS
// -----------------------------------------------------------------------------

export const isProjectRoute = (pathname: string) => {
  return normalizePath(pathname).match(/^\/project\/([^/]+)$/);
};

export const projectId = computed(() => {
  const match = isProjectRoute(path.value);
  return match ? match[1] : null;
});

export const projectVisible = computed(() => {
  return projectId.value !== null && !isTransitioning.value;
});

// -----------------------------------------------------------------------------
// "VIEW ALL" OVERLAY ROUTES
// -----------------------------------------------------------------------------

export const allProjectsVisible = computed(() => path.value === "/projects");
export const allCertificationsVisible = computed(() => path.value === "/certifications");

/** True whenever any full-screen overlay covers the home page. */
export const homeOverlayVisible = computed(
  () => projectVisible.value || allProjectsVisible.value || allCertificationsVisible.value,
);

export const recentProject = ref<string | null>(null);

export const recentProjectId = computed(() => {
  if (projectId.value) {
    recentProject.value = projectId.value;
  }
  return recentProject.value;
});

const KNOWN_STATIC_ROUTES = new Set(["/", "/projects", "/certifications"]);

/** Returns true when the SPA can render this path. */
export const isKnownRoute = (pathname: string) => {
  const normalized = normalizePath(pathname);
  if (KNOWN_STATIC_ROUTES.has(normalized)) return true;

  const projectMatch = isProjectRoute(normalized);
  if (projectMatch?.[1]) {
    return Boolean(getProjectMetaBySlug(projectMatch[1]));
  }

  return false;
};

// -----------------------------------------------------------------------------
// HISTORY PATCH (safe & minimal)
// -----------------------------------------------------------------------------

let historyPatched = false;

function patchHistory() {
  if (historyPatched || typeof window === "undefined") return;
  historyPatched = true;

  const wrap = (key: "pushState" | "replaceState") => {
    const original = history[key];
    history[key] = function (...args) {
      // @ts-ignore
      original.apply(this, args);

      // IMPORTANT FIX: delay events to avoid reactivity collisions
      queueMicrotask(() => {
        window.dispatchEvent(new Event("route-change"));
      });
    };
  };

  wrap("pushState");
  wrap("replaceState");
}

// -----------------------------------------------------------------------------
// COMPOSABLE
// -----------------------------------------------------------------------------

export function useRouteObserver() {
  const syncPath = () => {
    if (typeof window === "undefined") return;

    const raw = window.location.pathname;
    const normalized = normalizePath(raw);

    // Keep the address bar clean (no trailing slash) for shareable URLs on Vercel.
    if (raw !== normalized) {
      window.history.replaceState(window.history.state, "", normalized);
    }

    // Unknown / broken deep links → home (SPA still served by vercel.json rewrites).
    if (!isKnownRoute(normalized)) {
      if (normalized !== "/") {
        window.history.replaceState(null, "", "/");
      }
      path.value = "/";
      return;
    }

    if (normalized !== path.value) {
      path.value = normalized;
    }
  };

  onMounted(() => {
    patchHistory();
    syncPath();

    window.addEventListener("popstate", syncPath);
    window.addEventListener("route-change", syncPath);
  });

  onUnmounted(() => {
    window.removeEventListener("popstate", syncPath);
    window.removeEventListener("route-change", syncPath);
  });

  return {
    path,
    projectId,
    recentProjectId,
  };
}
