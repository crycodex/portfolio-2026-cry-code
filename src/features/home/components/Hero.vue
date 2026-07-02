<script setup lang="ts">
import { computed } from "vue";
import Button from "../../../components/Button.vue";
import AwardWreath from "../../../components/AwardWreath.vue";
import VisitCounter from "../../../components/VisitCounter.vue";
import { preloaderVisible } from "../../../composables/usePreloader";
import { t } from "../../../i18n/utils/translate";
import { locale } from "../../../i18n/store";
import { awards } from "../../../content/stats";
import { social, socialLinks } from "../../../content/social";

import type { Locale } from "../../../i18n/types";

const cvFiles: Record<Locale, string> = {
  en: "CV_RECALDE CRISTHIAN (EN).pdf",
  es: "CV_RECALDE CRISTHIAN (ES).pdf",
};

const cvFileName = computed(() => cvFiles[(locale.value ?? "es") as Locale]);
const cvHref = computed(() => `/cv/${encodeURIComponent(cvFileName.value)}`);
</script>

<template>
  <div class="hero">
    <div class="hero-content grid">
      <div class="hero-content-inner" id="hero-content-inner">
        <div class="hero-content-copys">
         
          <h1 class="hero-title" v-html="t('name-full')"></h1>
          <p class="hero-tagline" v-if="!preloaderVisible">{{ t("about-tagline") }}</p>
          <div class="hero-actions" v-if="!preloaderVisible">
            <Button renderAs="a" variant="accent" :href="cvHref" :download="cvFileName">{{ "CV" }}</Button>
            <Button
              renderAs="a"
              variant="border"
              :href="social.find((item) => item.name === 'mail')?.url ?? ''"
              external
              >{{ t("get-in-touch") }}</Button
            >
            <Button renderAs="a" variant="border" :href="socialLinks.github" external>GitHub</Button>
          </div>
          <div class="hero-awards" v-if="!preloaderVisible">
              <AwardWreath v-for="item in awards" :key="item.year ?? ''" :award="item" />
          </div>
          <VisitCounter v-if="!preloaderVisible" />
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
    margin-top: var(--space-xxl);
    font-size: var(--font-size-title-md);

    @include mixins.mq("sm") {
      font-size: var(--font-size-title-lg);
    }

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

  &-awards {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-sm);
    margin-top: var(--space-sm);

    @include mixins.mq("sm") {
      flex-direction: row;
      flex-wrap: wrap;
      gap: var(--space-md);
    }
  }

}
</style>
