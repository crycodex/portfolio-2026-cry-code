<script setup lang="ts">
import Button from "../../../components/Button.vue";
import { preloaderVisible } from "../../../composables/usePreloader";
import { t } from "../../../i18n/utils/translate";
import { locale } from "../../../i18n/store";
import { award } from "../../../content/stats";
import { social, socialLinks } from "../../../content/social";

import type { Locale } from "../../../i18n/types";

const pick = <T extends { es: string; en: string }>(item: T) => item[(locale.value ?? "es") as Locale];
</script>

<template>
  <div class="hero">
    <div class="hero-content grid">
      <div class="hero-content-inner" id="hero-content-inner">
        <div class="hero-content-copys">
          <p class="hero-available" v-if="!preloaderVisible">{{ t("available") }}</p>
          <p class="hero-hello" v-if="!preloaderVisible">{{ t("hello") }}</p>
          <h1 class="hero-title" v-html="t('name-full')"></h1>
          <p class="hero-tagline" v-if="!preloaderVisible">{{ t("about-tagline") }}</p>
          <div class="hero-actions" v-if="!preloaderVisible">
            <Button renderAs="a" variant="accent" :href="socialLinks.cv" external>{{ "CV" }}</Button>
            <Button
              renderAs="a"
              variant="border"
              :href="social.find((item) => item.name === 'mail')?.url ?? ''"
              external
              >{{ t("get-in-touch") }}</Button
            >
            <Button renderAs="a" variant="border" :href="socialLinks.github" external>GitHub</Button>
          </div>
          <div class="hero-award" v-if="!preloaderVisible">
            <span class="hero-award-badge">{{ pick(award.badge) }}</span>
            <div class="hero-award-copy">
              <strong>{{ pick(award.title) }}</strong>
              <span>{{ pick(award.subtitle) }}</span>
              <span>{{ award.year }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hero {
  max-height: calc(var(--lvh) * 100);
  min-height: calc(var(--lvh) * 100);
  height: calc(var(--lvh) * 100);
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;

  &-content {
    align-items: center;
    justify-content: center;
    height: 46%;

    @include mixins.landscape {
      height: 100%;

      @include mixins.mq("md") {
        padding-bottom: 30%;
      }

      @include mixins.mq("lg") {
        padding-bottom: 5%;
      }
    }

    &-inner {
      transform-origin: center center;
      grid-column: 1 / 13;
      gap: var(--space-xxl);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: fit-content;
      position: relative;
      left: 50%;
      transform: translateX(-50%);

      @include mixins.landscape {
        left: 0;
        transform: translateX(0);
        grid-column: 2 / 12;
        width: fit-content;
        max-width: 720px;
      }
    }

    &-copys {
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);

      @include mixins.mq("md") {
        gap: var(--space-md);
      }
    }
  }

  &-available {
    font-size: var(--font-size-sm);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--color-cyan-500);
  }

  &-hello {
    font-size: var(--font-size-md);
    font-weight: 700;
  }

  &-title {
    font-weight: 900;
    letter-spacing: 0.02em;
    font-size: var(--font-size-title-lg);

    @include mixins.landscape {
      font-size: var(--font-size-title-lg);
    }

    @include mixins.landscape-large {
      @include mixins.mq("sm") {
        font-size: var(--font-size-title-xl);
      }

      @include mixins.mq("xl") {
        font-size: var(--font-size-title-xxl);
      }
    }
  }

  &-tagline {
    font-size: var(--font-size-sm);
    line-height: 1.5;
    max-width: 520px;

    @include mixins.mq("md") {
      font-size: var(--font-size-md);
    }
  }

  &-actions {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-sm);
    margin-top: var(--space-xs);
  }

  &-award {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    margin-top: var(--space-sm);
    padding: var(--space-xs) var(--space-sm);
    border: var(--stroke-sm) solid var(--color-brand-400);
    border-radius: var(--radius-md);
    width: fit-content;

    &-badge {
      font-family: "ProFontWindows", sans-serif;
      font-weight: 700;
      color: var(--color-brand-400);
    }

    &-copy {
      display: flex;
      flex-direction: column;
      font-size: var(--font-size-sm);
      gap: 2px;
    }
  }

}
</style>
