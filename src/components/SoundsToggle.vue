<script setup lang="ts">
import { soundsEnabled, howlerUnlocked } from "../features/sounds/composables/useHowler";
import ButtonRound from "./ButtonRound.vue";
import Volume from "./icons/Volume.vue";
import { t } from "../i18n/utils/translate";
import { useAgent } from "../composables/useAgent";

const { isTouch } = useAgent();

const props = defineProps<{
  isDarkTheme: boolean;
}>();

const toggleSounds = () => {
  soundsEnabled.value = !soundsEnabled.value;
};
</script>

<template>
  <ButtonRound
    v-if="!isTouch"
    variant="theme"
    :class="{ 'music-toggle': true, 'music-toggle-dark': props.isDarkTheme, 'children-unclickable': true }"
    @click="toggleSounds"
    :aria-label="soundsEnabled && howlerUnlocked ? t('disable-sounds') : t('enable-sounds')"
    data-cursor="circle-white"
    data-sound="click"
    data-hoversound="hover"
  >
    <Volume :active="soundsEnabled && howlerUnlocked" />
  </ButtonRound>
</template>

<style scoped lang="scss">
.music-toggle {
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
