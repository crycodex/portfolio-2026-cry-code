<script setup lang="ts">
import ButtonRound from "./ButtonRound.vue";
import Theme from "./icons/Theme.vue";
import { t } from "../i18n/utils/translate";
import { theme, toggleTheme } from "../composables/useTheme";

const props = defineProps<{
  isDarkTheme: boolean;
}>();
</script>

<template>
  <ButtonRound
    variant="theme"
    :class="{ 'theme-toggle': true, 'theme-toggle-dark': props.isDarkTheme, 'children-unclickable': true }"
    @click="toggleTheme"
    :aria-label="theme === 'dark' ? t('disable-dark-mode') : t('enable-dark-mode')"
    data-cursor="circle-white"
    data-sound="click"
    data-hoversound="hover"
  >
    <Theme :active="theme === 'dark'" />
  </ButtonRound>
</template>

<style scoped lang="scss">
.theme-toggle {
  &:not(:hover) {
    background-color: color-mix(in srgb, var(--color-surface-3) 60%, transparent);
  }
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  &-dark:not(:hover) {
    background-color: color-mix(in srgb, var(--color-dark-blue-500) 70%, transparent);
    color: var(--color-white-400);
    --icon-color: var(--color-white-400);
  }
}
</style>
