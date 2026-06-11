import { ref, watch } from "vue";
import { setThreeTheme } from "../three/common/colors";

type Theme = "light" | "dark";

const THEME_COLORS: Record<Theme, string> = {
  light: "#fafafa",
  dark: "#101013",
};

const initialTheme = (): Theme => {
  if (typeof document === "undefined") return "light";
  // the inline script in index.html already resolved localStorage/prefers-color-scheme
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
};

export const theme = ref<Theme>(initialTheme());

let initialized = false;

const applyTheme = (value: Theme) => {
  document.documentElement.dataset.theme = value;
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", THEME_COLORS[value]);
  setThreeTheme(value);
};

export const toggleTheme = () => {
  theme.value = theme.value === "dark" ? "light" : "dark";
  localStorage.setItem("theme", theme.value);
};

export const useTheme = () => {
  if (!initialized && typeof window !== "undefined") {
    initialized = true;

    // follow system changes only while the user hasn't picked a theme manually
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    media.addEventListener("change", (event) => {
      if (localStorage.getItem("theme")) return;
      theme.value = event.matches ? "dark" : "light";
    });

    watch(theme, applyTheme, { immediate: true });
  }

  return { theme, toggleTheme };
};
