<script setup lang="ts">
import NotchSection from "../../../components/NotchSection.vue";
import Banner from "../../../components/Banner.vue";
import { t } from "../../../i18n/utils/translate";
import { locale } from "../../../i18n/store";
import { talks } from "../../../content/talks";

import type { Locale } from "../../../i18n/types";

const pick = <T extends { es: string; en: string }>(item: T) => item[(locale.value ?? "es") as Locale];

const parseEvent = (event: string) => {
  const parts = event.split("·").map((p) => p.trim());
  return {
    venue: parts[0] ?? event,
    date: parts[1] ?? "",
  };
};
</script>

<template>
  <section class="talks" id="talks">
    <NotchSection class="talks-notch-start" />
    <NotchSection class="talks-notch-end" />
    <div class="talks-inner">
      <header class="talks-header">
        <Banner class="talks-header-banner" :copy="t('talks')" size="sm" animated />
        <h2 class="talks-header-title">{{ t("talks") }}</h2>
        <p class="talks-header-subtitle">{{ t("talks-subtitle") }}</p>
      </header>

      <ul class="talks-grid">
        <li v-for="(talk, index) in talks" :key="talk.title.es" class="talks-card">
          <div class="talks-card-index" aria-hidden="true">{{ String(index + 1).padStart(2, "0") }}</div>
          <div class="talks-card-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 14a3 3 0 0 0 3-3V6a3 3 0 1 0-6 0v5a3 3 0 0 0 3 3Zm6 0v1a6 6 0 0 1-12 0v-1M12 19v3"
                stroke="currentColor"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div class="talks-card-body">
            <h3 class="talks-card-title">{{ pick(talk.title) }}</h3>
            <p class="talks-card-venue">{{ parseEvent(pick(talk.event)).venue }}</p>
            <p v-if="parseEvent(pick(talk.event)).date" class="talks-card-date">
              {{ parseEvent(pick(talk.event)).date }}
            </p>
            <a
              v-if="talk.url"
              :href="talk.url"
              class="talks-card-link"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="circle-white"
            >
              {{ t("view-more") }}
              <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
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

  &-inner {
    width: 100%;
    max-width: 1040px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-xl);

    @include mixins.mq("md") {
      gap: var(--space-xxl);
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

    &-subtitle {
      margin: var(--space-sm) auto 0;
      font-size: var(--font-size-md);
      color: var(--color-text-300);
      max-width: 640px;
      line-height: 1.5;
    }

    &-banner {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, -20%) rotate(-4deg);
    }
  }

  &-grid {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-md);
    list-style: none;

    @include mixins.mq("md") {
      grid-template-columns: repeat(2, 1fr);
      gap: var(--space-lg);
    }
  }

  &-card {
    position: relative;
    display: flex;
    gap: var(--space-md);
    padding: var(--space-md);
    background-color: var(--color-beige-400);
    border: var(--stroke-sm) solid var(--color-beige-600);
    border-radius: var(--radius-md);
    transition:
      border-color 0.2s ease,
      box-shadow 0.2s ease,
      transform 0.2s ease;

    @include mixins.mq("md") {
      padding: var(--space-lg);
    }

    @include mixins.hover {
      &:hover {
        border-color: var(--color-brand-300);
        box-shadow: 0 8px 24px rgba(59, 130, 246, 0.12);
        transform: translateY(-2px);
      }
    }

    &-index {
      position: absolute;
      top: var(--space-sm);
      right: var(--space-sm);
      font-family: "ProFontWindows", sans-serif;
      font-size: var(--font-size-xs);
      font-weight: 700;
      color: var(--color-brand-300);
      opacity: 0.6;
    }

    &-icon {
      flex-shrink: 0;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--color-beige-600);
      border: 2px solid var(--color-brand-400);
      color: var(--color-brand-400);

      svg {
        width: 20px;
        height: 20px;
      }
    }

    &-body {
      flex: 1;
      min-width: 0;
      display: flex;
      flex-direction: column;
      gap: var(--space-xxs);
      padding-right: var(--space-lg);
    }

    &-title {
      font-weight: 700;
      font-size: var(--font-size-md);
      color: var(--color-brand-400);
      line-height: 1.35;

      @include mixins.mq("md") {
        font-size: var(--font-size-lg);
      }
    }

    &-venue {
      font-size: var(--font-size-sm);
      font-weight: 700;
      color: var(--color-text-400);
      line-height: 1.4;
    }

    &-date {
      font-size: var(--font-size-sm);
      color: var(--color-text-300);
      font-style: italic;
    }

    &-link {
      display: inline-flex;
      align-items: center;
      gap: var(--space-xxs);
      margin-top: var(--space-xs);
      font-size: var(--font-size-sm);
      font-weight: 700;
      color: var(--color-brand-400);
      text-transform: lowercase;
      width: fit-content;
      transition: color 0.15s ease;

      svg {
        width: 14px;
        height: 14px;
        transition: transform 0.15s ease;
      }

      @include mixins.hover {
        &:hover {
          color: var(--color-brand-500);

          svg {
            transform: translateX(3px);
          }
        }
      }

    }
  }
}
</style>
