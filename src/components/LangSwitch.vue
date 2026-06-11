<script setup lang="ts">
import Button from "./Button.vue";
import ButtonRound from "./ButtonRound.vue";
import { locale } from "../i18n/store";
import { changeLocale } from "../i18n/utils/locale";
import { t } from "../i18n/utils/translate";

const props = defineProps<{
  round?: boolean;
  isDarkTheme?: boolean;
}>();

const handleLangSwitch = () => {
  changeLocale(locale.value === "es" ? "en" : "es");
};
</script>

<template>
  <ButtonRound
    v-if="props.round"
    variant="theme"
    :class="{ 'lang-switch': true, 'lang-switch-dark': props.isDarkTheme, 'children-unclickable': true }"
    @click="handleLangSwitch"
    :aria-label="t('switch-language')"
    data-cursor="circle-white"
    data-sound="click"
    data-hoversound="hover"
  >
    <span class="lang-switch-label">{{ locale === "es" ? "EN" : "ES" }}</span>
  </ButtonRound>
  <Button
    v-else
    variant="border"
    size="sm"
    @click="handleLangSwitch"
    :aria-label="t('switch-language')"
    data-cursor="circle-white"
    data-sound="click"
    data-hoversound="hover"
    >{{ locale === "es" ? "EN" : "ES" }}</Button
  >
</template>

<style scoped lang="scss">
.lang-switch {
  &-dark {
    background-color: var(--color-dark-blue-500);
    color: var(--color-white-400);
  }

  &-label {
    font-size: var(--font-size-sm);
    font-weight: 700;
    letter-spacing: 0.04em;
  }
}
</style>
