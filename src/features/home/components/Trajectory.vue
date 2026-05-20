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
    <div class="trajectory-inner">
      <div class="trajectory-header">
        <Banner class="trajectory-header-banner" :copy="t('trajectory')" size="sm" animated />
        <h2 class="trajectory-header-title">{{ t("trajectory") }}</h2>
      </div>

      <div class="trajectory-timeline">
        <div class="trajectory-timeline-rail" aria-hidden="true"></div>

        <article v-for="entry in trajectory" :key="entry.company" class="trajectory-entry">
          <div class="trajectory-entry-marker" :class="`trajectory-entry-marker-${entry.kind}`">
            <svg
              v-if="entry.kind === 'work'"
              class="trajectory-entry-icon"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m-9 4h10m-10 0v8a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-8M6 11h12"
                stroke="currentColor"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              v-else
              class="trajectory-entry-icon"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M12 3 3 8.5v2L12 16l9-5.5v-2L12 3Zm0 6.5 6.5-4L12 2 5.5 5.5 12 9.5Zm-7 3.25L12 14.5l7-1.75M5 14v3.5L12 22l7-4.5V14"
                stroke="currentColor"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div class="trajectory-entry-body">
            <header class="trajectory-entry-head">
              <h3 class="trajectory-entry-company">{{ entry.company }}</h3>
              <p class="trajectory-entry-meta">{{ pick(entry.meta) }}</p>
              <p class="trajectory-entry-location">{{ pick(entry.location) }}</p>
            </header>

            <div
              v-for="(role, roleIndex) in entry.roles"
              :key="role.title.es"
              class="trajectory-role"
              :class="{ 'trajectory-role-not-first': roleIndex > 0 }"
            >
              <div class="trajectory-role-header">
                <span class="trajectory-role-bullet" aria-hidden="true"></span>
                <h4 class="trajectory-role-title">{{ pick(role.title) }}</h4>
                <span class="trajectory-role-period">{{ pick(role.period) }}</span>
              </div>
              <p class="trajectory-role-description">{{ pick(role.description) }}</p>
            </div>
          </div>
        </article>
      </div>
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

  &-inner {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-xl);

    @include mixins.mq("md") {
      gap: var(--space-xxl);
      max-width: 840px;
    }
  }

  &-header {
    position: relative;
    padding-top: var(--space-md);
    width: 100%;
    text-align: center;

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
      left: 50%;
      transform: translate(-50%, -20%) rotate(-4deg);
    }
  }

  &-timeline {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0;
    width: 100%;
    padding-left: 56px;

    @include mixins.mq("md") {
      padding-left: 72px;
    }

    &-rail {
      position: absolute;
      left: 19px;
      top: 8px;
      bottom: 8px;
      width: 2px;
      background: linear-gradient(
        to bottom,
        var(--color-brand-400) 0%,
        var(--color-gray-400) 35%,
        var(--color-gray-400) 100%
      );
      border-radius: 2px;

      @include mixins.mq("md") {
        left: 27px;
      }
    }
  }

  &-entry {
    position: relative;
    display: flex;
    gap: var(--space-md);
    padding-bottom: var(--space-xxl);

    &:last-child {
      padding-bottom: 0;
    }

    &-marker {
      position: absolute;
      left: -56px;
      top: 4px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--color-beige-400);
      border: 2px solid var(--color-brand-400);
      color: var(--color-brand-400);
      z-index: 1;
      flex-shrink: 0;

      @include mixins.mq("md") {
        left: -72px;
        width: 48px;
        height: 48px;
      }

      &-education {
        border-color: var(--color-brand-300);
        color: var(--color-brand-300);
      }
    }

    &-icon {
      width: 20px;
      height: 20px;

      @include mixins.mq("md") {
        width: 22px;
        height: 22px;
      }
    }

    &-body {
      flex: 1;
      min-width: 0;
      display: flex;
      flex-direction: column;
      gap: var(--space-md);
    }

    &-company {
      font-size: var(--font-size-title-xs);
      font-weight: 700;
      color: var(--color-brand-400);
      line-height: 1.2;

      @include mixins.mq("md") {
        font-size: var(--font-size-title-sm);
      }
    }

    &-meta {
      margin-top: var(--space-xxs);
      font-size: var(--font-size-sm);
      color: var(--color-text-300);
      line-height: 1.4;
    }

    &-location {
      font-size: var(--font-size-sm);
      color: var(--color-text-300);
      font-style: italic;
      line-height: 1.4;
    }
  }

  &-role {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);

    &-not-first {
      margin-top: var(--space-xs);
      padding-top: var(--space-md);
      border-top: 1px solid var(--color-beige-500);
    }

    &-header {
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
      gap: var(--space-xs) var(--space-sm);
    }

    &-bullet {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: var(--color-brand-400);
      flex-shrink: 0;
      transform: translateY(-1px);
    }

    &-title {
      font-weight: 700;
      font-size: var(--font-size-md);
      color: var(--color-text-400);

      @include mixins.mq("md") {
        font-size: var(--font-size-lg);
      }
    }

    &-period {
      font-size: var(--font-size-sm);
      color: var(--color-text-300);
      white-space: nowrap;
    }

    &-description {
      font-size: var(--font-size-md);
      line-height: 1.6;
      color: var(--color-text-400);
      padding-left: calc(6px + var(--space-sm));
    }
  }
}
</style>
