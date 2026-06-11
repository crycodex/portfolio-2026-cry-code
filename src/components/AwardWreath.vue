<script setup lang="ts">
import { locale } from "../i18n/store";

import type { Award } from "../content/stats";
import type { Locale } from "../i18n/types";

const props = defineProps<{
  award: Award;
}>();

const pick = <T extends { es: string; en: string }>(item: T) => item[(locale.value ?? "es") as Locale];
</script>

<template>
  <div class="award-wreath">
    <svg class="award-wreath-branch" viewBox="0 0 36 96" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M31 92 C 12 72 6 42 15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      <g fill="currentColor">
        <g transform="translate(28 88) rotate(-70)"><path d="M0 0 C 2.5 -4 2.5 -10 0 -14 C -2.5 -10 -2.5 -4 0 0 Z" /></g>
        <g transform="translate(20 78) rotate(-55)"><path d="M0 0 C 2.5 -4 2.5 -10 0 -14 C -2.5 -10 -2.5 -4 0 0 Z" /></g>
        <g transform="translate(14 66) rotate(-40)"><path d="M0 0 C 2.5 -4 2.5 -10 0 -14 C -2.5 -10 -2.5 -4 0 0 Z" /></g>
        <g transform="translate(10 53) rotate(-25)"><path d="M0 0 C 2.5 -4 2.5 -10 0 -14 C -2.5 -10 -2.5 -4 0 0 Z" /></g>
        <g transform="translate(8 40) rotate(-10)"><path d="M0 0 C 2.5 -4 2.5 -10 0 -14 C -2.5 -10 -2.5 -4 0 0 Z" /></g>
        <g transform="translate(9 27) rotate(5)"><path d="M0 0 C 2.5 -4 2.5 -10 0 -14 C -2.5 -10 -2.5 -4 0 0 Z" /></g>
        <g transform="translate(12 15) rotate(20)"><path d="M0 0 C 2.5 -4 2.5 -10 0 -14 C -2.5 -10 -2.5 -4 0 0 Z" /></g>
        <g transform="translate(31 80) rotate(-15)"><path d="M0 0 C 2.5 -4 2.5 -10 0 -14 C -2.5 -10 -2.5 -4 0 0 Z" /></g>
        <g transform="translate(23 68) rotate(-5)"><path d="M0 0 C 2.5 -4 2.5 -10 0 -14 C -2.5 -10 -2.5 -4 0 0 Z" /></g>
        <g transform="translate(18 55) rotate(10)"><path d="M0 0 C 2.5 -4 2.5 -10 0 -14 C -2.5 -10 -2.5 -4 0 0 Z" /></g>
        <g transform="translate(15 42) rotate(25)"><path d="M0 0 C 2.5 -4 2.5 -10 0 -14 C -2.5 -10 -2.5 -4 0 0 Z" /></g>
        <g transform="translate(14 29) rotate(40)"><path d="M0 0 C 2.5 -4 2.5 -10 0 -14 C -2.5 -10 -2.5 -4 0 0 Z" /></g>
        <g transform="translate(17 17) rotate(55)"><path d="M0 0 C 2.5 -4 2.5 -10 0 -14 C -2.5 -10 -2.5 -4 0 0 Z" /></g>
      </g>
    </svg>

    <div class="award-wreath-content">
      <span :class="['award-wreath-badge', `award-wreath-badge-${props.award.variant ?? 'gold'}`]">{{
        pick(props.award.badge)
      }}</span>
      <strong class="award-wreath-title">{{ pick(props.award.title) }}</strong>
      <span class="award-wreath-subtitle">{{ pick(props.award.subtitle) }}</span>
      <span class="award-wreath-when">{{ pick(props.award.when) }}</span>
      <span v-if="props.award.year" class="award-wreath-year">{{ props.award.year }}</span>
    </div>

    <svg
      class="award-wreath-branch award-wreath-branch-right"
      viewBox="0 0 36 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M31 92 C 12 72 6 42 15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      <g fill="currentColor">
        <g transform="translate(28 88) rotate(-70)"><path d="M0 0 C 2.5 -4 2.5 -10 0 -14 C -2.5 -10 -2.5 -4 0 0 Z" /></g>
        <g transform="translate(20 78) rotate(-55)"><path d="M0 0 C 2.5 -4 2.5 -10 0 -14 C -2.5 -10 -2.5 -4 0 0 Z" /></g>
        <g transform="translate(14 66) rotate(-40)"><path d="M0 0 C 2.5 -4 2.5 -10 0 -14 C -2.5 -10 -2.5 -4 0 0 Z" /></g>
        <g transform="translate(10 53) rotate(-25)"><path d="M0 0 C 2.5 -4 2.5 -10 0 -14 C -2.5 -10 -2.5 -4 0 0 Z" /></g>
        <g transform="translate(8 40) rotate(-10)"><path d="M0 0 C 2.5 -4 2.5 -10 0 -14 C -2.5 -10 -2.5 -4 0 0 Z" /></g>
        <g transform="translate(9 27) rotate(5)"><path d="M0 0 C 2.5 -4 2.5 -10 0 -14 C -2.5 -10 -2.5 -4 0 0 Z" /></g>
        <g transform="translate(12 15) rotate(20)"><path d="M0 0 C 2.5 -4 2.5 -10 0 -14 C -2.5 -10 -2.5 -4 0 0 Z" /></g>
        <g transform="translate(31 80) rotate(-15)"><path d="M0 0 C 2.5 -4 2.5 -10 0 -14 C -2.5 -10 -2.5 -4 0 0 Z" /></g>
        <g transform="translate(23 68) rotate(-5)"><path d="M0 0 C 2.5 -4 2.5 -10 0 -14 C -2.5 -10 -2.5 -4 0 0 Z" /></g>
        <g transform="translate(18 55) rotate(10)"><path d="M0 0 C 2.5 -4 2.5 -10 0 -14 C -2.5 -10 -2.5 -4 0 0 Z" /></g>
        <g transform="translate(15 42) rotate(25)"><path d="M0 0 C 2.5 -4 2.5 -10 0 -14 C -2.5 -10 -2.5 -4 0 0 Z" /></g>
        <g transform="translate(14 29) rotate(40)"><path d="M0 0 C 2.5 -4 2.5 -10 0 -14 C -2.5 -10 -2.5 -4 0 0 Z" /></g>
        <g transform="translate(17 17) rotate(55)"><path d="M0 0 C 2.5 -4 2.5 -10 0 -14 C -2.5 -10 -2.5 -4 0 0 Z" /></g>
      </g>
    </svg>
  </div>
</template>

<style scoped lang="scss">
.award-wreath {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-xxs);
  color: var(--color-text-400);
  width: fit-content;

  &-branch {
    width: 26px;
    height: 70px;
    flex-shrink: 0;

    &-right {
      transform: scaleX(-1);
    }
  }

  &-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2px;
    max-width: 150px;
  }

  &-badge {
    font-family: "ProFontWindows", sans-serif;
    font-weight: 700;
    font-size: var(--font-size-xs);
    letter-spacing: 0.08em;
    color: var(--color-white-400);
    padding: 1px var(--space-xs);
    border-radius: var(--radius-sm);

    &-gold {
      background: linear-gradient(to bottom, #f0c33c, #c9920a);
    }

    &-brand {
      background: linear-gradient(to bottom, var(--color-brand-300), var(--color-brand-500));
    }
  }

  &-title {
    font-weight: 900;
    font-size: var(--font-size-md);
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  &-subtitle {
    font-size: var(--font-size-xxs);
    line-height: 1.35;
  }

  &-when {
    font-size: var(--font-size-xs);
    font-weight: 400;
  }

  &-year {
    font-size: var(--font-size-xxs);
    font-weight: 700;
  }
}
</style>
