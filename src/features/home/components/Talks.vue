<script setup lang="ts">
import NotchSection from "../../../components/NotchSection.vue";
import Banner from "../../../components/Banner.vue";
import { t } from "../../../i18n/utils/translate";
import { locale } from "../../../i18n/store";
import { talks } from "../../../content/talks";

import type { Locale } from "../../../i18n/types";

const pick = <T extends { es: string; en: string }>(item: T) => item[(locale.value ?? "es") as Locale];
</script>

<template>
  <section class="talks" id="talks">
    <NotchSection class="talks-notch-start" />
    <NotchSection class="talks-notch-end" />
    <div class="grid">
      <div class="talks-header">
        <Banner class="talks-header-banner" :copy="t('talks')" size="sm" animated />
        <h2 class="talks-header-title">{{ t("talks") }}</h2>
        <p class="talks-header-subtitle">{{ t("talks-subtitle") }}</p>
      </div>
      <ul class="talks-list">
        <li v-for="talk in talks" :key="talk.title.es" class="talks-item">
          <h3 class="talks-item-title">{{ pick(talk.title) }}</h3>
          <p class="talks-item-event">{{ pick(talk.event) }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
.talks {
  position: relative;
  width: 100%;
  padding: 96px var(--space-outer);
  background-color: var(--color-beige-500);
  display: flex;
  flex-direction: column;

  @include mixins.mq("md") {
    padding-top: 144px;
    padding-bottom: 144px;
  }

  &-notch {
    &-start {
      position: absolute;
      top: 0;
      left: 0;
      transform: translateY(-100%);
      color: var(--color-beige-500);
      --icon-color: var(--color-beige-500);
    }

    &-end {
      position: absolute;
      bottom: 0;
      left: 0;
      color: var(--color-beige-400);
      --icon-color: var(--color-beige-400);
    }
  }

  &-header {
    position: relative;
    padding-top: var(--space-md);
    grid-column: 1 / 13;
    margin-bottom: var(--space-xl);

    @include mixins.mq("lg") {
      grid-column: 3 / 11;
    }

    &-title {
      font-weight: 900;
      letter-spacing: 0.02em;
      font-size: var(--font-size-title-md);

      @include mixins.mq("sm") {
        font-size: var(--font-size-title-lg);
      }
    }

    &-subtitle {
      margin-top: var(--space-sm);
      font-size: var(--font-size-md);
      color: var(--color-text-400);
      max-width: 720px;
    }

    &-banner {
      position: absolute;
      top: 0;
      left: -8px;
      transform: translate(0, -20%) rotate(-4deg);
    }
  }

  &-list {
    grid-column: 1 / 13;
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
    list-style: none;

    @include mixins.mq("lg") {
      grid-column: 3 / 11;
    }
  }

  &-item {
    padding: var(--space-md) 0;
    border-bottom: var(--stroke-sm) solid var(--color-beige-600);

    &:last-child {
      border-bottom: none;
    }

    &-title {
      font-weight: 700;
      font-size: var(--font-size-md);
      margin-bottom: var(--space-xs);

      @include mixins.mq("md") {
        font-size: var(--font-size-lg);
      }
    }

    &-event {
      font-size: var(--font-size-sm);
      color: var(--color-text-400);
    }
  }
}
</style>
