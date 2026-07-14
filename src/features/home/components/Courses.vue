<script setup lang="ts">
import { computed } from "vue";
import NotchSection from "../../../components/NotchSection.vue";
import Banner from "../../../components/Banner.vue";
import { t } from "../../../i18n/utils/translate";
import { locale } from "../../../i18n/store";
import { courses } from "../../../content/courses";

import type { Locale } from "../../../i18n/types";

const lang = computed(() => (locale.value ?? "es") as Locale);
</script>

<template>
  <section class="courses" id="courses">
    <NotchSection class="courses-notch-start" />
    <NotchSection class="courses-notch-end" />
    <div class="courses-inner">
      <header class="courses-header">
        <Banner class="courses-header-banner" :copy="t('courses-tag')" size="sm" animated />
        <h2 class="courses-header-title">{{ t("courses") }}</h2>
        <p class="courses-header-subtitle">{{ t("courses-subtitle") }}</p>
      </header>

      <ul class="courses-list">
        <li v-for="course in courses" :key="course.url" class="courses-item">
          <a
            :href="course.url"
            class="courses-card"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="circle-white"
            :aria-label="`${course.title[lang]} — ${course.platform}`"
          >
            <div class="courses-card-top">
              <span class="courses-card-platform">
                {{ course.platform }}<template v-if="course.instructor"> · {{ course.instructor }}</template>
              </span>
              <span class="courses-card-link" aria-hidden="true">
                <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>
            <h3 class="courses-card-title">{{ course.title[lang] }}</h3>
            <p class="courses-card-description">{{ course.description[lang] }}</p>
            <ul class="courses-card-topics">
              <li v-for="topic in course.topics" :key="topic" class="courses-card-topic">{{ topic }}</li>
            </ul>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
.courses {
  position: relative;
  width: 100%;
  padding: 96px var(--space-outer);
  background-color: var(--color-beige-400);
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
      color: var(--color-beige-400);
      --icon-color: var(--color-beige-400);
    }

    &-end {
      position: absolute;
      bottom: 0;
      left: 0;
      color: var(--color-beige-500);
      --icon-color: var(--color-beige-500);
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

  &-list {
    width: 100%;
    display: grid;
    gap: var(--space-md);
    list-style: none;

    @include mixins.mq("md") {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &-item {
    display: flex;
  }

  &-card {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
    width: 100%;
    padding: var(--space-lg);
    border: var(--stroke-sm) solid var(--color-beige-700);
    border-radius: var(--radius-lg);
    background: var(--color-beige-500);
    overflow: hidden;
    transition:
      transform 0.15s var(--ease-power2-out),
      border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;

    &::before {
      content: "";
      position: absolute;
      inset: 0 0 auto 0;
      height: 3px;
      background: linear-gradient(90deg, var(--color-brand-400), var(--color-brand-300));
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.2s var(--ease-power2-out);
    }

    @include mixins.hover {
      &:hover {
        transform: translateY(-4px);
        border-color: var(--color-brand-400);
        box-shadow: 0 12px 28px -16px rgba(37, 99, 235, 0.45);

        &::before {
          transform: scaleX(1);
        }

        .courses-card-title {
          color: var(--color-brand-400);
        }

        .courses-card-link {
          color: var(--color-brand-400);
          border-color: var(--color-brand-400);

          svg {
            transform: translateX(3px);
          }
        }
      }
    }

    &-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-sm);
    }

    &-platform {
      font-size: var(--font-size-xs);
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: var(--color-brand-500);
    }

    &-link {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      border: var(--stroke-sm) solid var(--color-beige-700);
      color: var(--color-text-300);
      transition:
        color 0.15s ease,
        border-color 0.15s ease;

      svg {
        width: 14px;
        height: 14px;
        transition: transform 0.15s ease;
      }
    }

    &-title {
      font-weight: 800;
      font-size: var(--font-size-md);
      line-height: 1.25;
      color: var(--color-text-400);
      transition: color 0.15s ease;
    }

    &-description {
      font-size: var(--font-size-sm);
      color: var(--color-text-300);
      line-height: var(--line-height-copy);
    }

    &-topics {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-xs);
      margin-top: auto;
      padding-top: var(--space-xs);
      list-style: none;
    }

    &-topic {
      font-size: var(--font-size-xxs);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--color-text-300);
      padding: 4px 10px;
      border: var(--stroke-sm) solid var(--color-beige-700);
      border-radius: var(--radius-full, 999px);
    }
  }
}
</style>
