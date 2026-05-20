<script setup lang="ts">
import NotchSection from "../../../components/NotchSection.vue";
import Banner from "../../../components/Banner.vue";
import { t } from "../../../i18n/utils/translate";
import { locale } from "../../../i18n/store";
import { trajectory } from "../../../content/trajectory";

import type { Locale } from "../../../i18n/types";

const pick = <T extends { es: string; en: string }>(item: T) => item[(locale.value ?? "es") as Locale];
</script>

<template>
  <section class="trajectory" id="trajectory">
    <NotchSection class="trajectory-notch-start" />
    <NotchSection class="trajectory-notch-end" />
    <div class="grid">
      <div class="trajectory-header">
        <Banner class="trajectory-header-banner" :copy="t('trajectory')" size="sm" animated />
        <h2 class="trajectory-header-title">{{ t("trajectory") }}</h2>
      </div>
    </div>
    <div class="grid trajectory-list">
      <article v-for="entry in trajectory" :key="entry.company" class="trajectory-entry">
        <div class="trajectory-entry-head">
          <h3 class="trajectory-entry-company">{{ entry.company }}</h3>
          <p class="trajectory-entry-meta">{{ pick(entry.meta) }}</p>
          <p class="trajectory-entry-location">{{ pick(entry.location) }}</p>
        </div>
        <div v-for="role in entry.roles" :key="role.title.es" class="trajectory-role">
          <h4 class="trajectory-role-title">{{ pick(role.title) }}</h4>
          <p class="trajectory-role-period">{{ pick(role.period) }}</p>
          <p class="trajectory-role-description">{{ pick(role.description) }}</p>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped lang="scss">
.trajectory {
  position: relative;
  width: 100%;
  padding: 96px var(--space-outer);
  background-color: var(--color-beige-600);
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);

  @include mixins.mq("md") {
    padding-top: 144px;
    padding-bottom: 144px;
    gap: var(--space-xxl);
  }

  &-notch {
    &-start {
      position: absolute;
      top: 0;
      left: 0;
      transform: translateY(-100%);
      color: var(--color-beige-600);
      --icon-color: var(--color-beige-600);
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

    &-banner {
      position: absolute;
      top: 0;
      left: -8px;
      transform: translate(0, -20%) rotate(-4deg);
    }
  }

  &-list {
    gap: var(--space-xl);
    grid-column: 1 / 13;

    @include mixins.mq("lg") {
      grid-column: 3 / 11;
    }
  }

  &-entry {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
    padding-bottom: var(--space-lg);
    border-bottom: var(--stroke-sm) solid var(--color-beige-500);

    &:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }

    &-company {
      font-size: var(--font-size-title-xs);
      font-weight: 700;
    }

    &-meta,
    &-location {
      font-size: var(--font-size-sm);
      color: var(--color-text-400);
    }
  }

  &-role {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
    padding-left: var(--space-md);
    border-left: 2px solid var(--color-orange-400);

    &-title {
      font-weight: 700;
      font-size: var(--font-size-lg);
    }

    &-period {
      font-size: var(--font-size-sm);
      color: var(--color-text-400);
    }

    &-description {
      font-size: var(--font-size-md);
      line-height: 1.5;
    }
  }
}
</style>
