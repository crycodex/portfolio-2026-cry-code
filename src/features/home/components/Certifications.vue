<script setup lang="ts">
import { computed } from "vue";
import NotchSection from "../../../components/NotchSection.vue";
import Banner from "../../../components/Banner.vue";
import Button from "../../../components/Button.vue";
import Link from "../../../components/Link.vue";
import CertIcon from "../../../components/CertIcon.vue";
import { t } from "../../../i18n/utils/translate";
import { locale } from "../../../i18n/store";
import { getFeaturedCertifications } from "../../../content/certifications";

import type { Locale } from "../../../i18n/types";

const lang = computed(() => (locale.value ?? "es") as Locale);
const featured = getFeaturedCertifications();
</script>

<template>
  <section class="certifications" id="certifications">
    <NotchSection class="certifications-notch-start" />
    <NotchSection class="certifications-notch-end" />
    <div class="grid">
      <div class="certifications-header">
        <Banner class="certifications-header-banner" :copy="t('certifications-tag')" size="sm" animated />
        <h2 class="certifications-header-title">{{ t("certifications") }}</h2>
        <p class="certifications-header-subtitle">{{ t("certifications-subtitle") }}</p>
      </div>
      <ul class="certifications-list">
        <li v-for="cert in featured" :key="cert.id" class="certifications-item">
          <div class="certifications-item-icon">
            <CertIcon :name="cert.icon" />
          </div>
          <div class="certifications-item-body">
            <h3 class="certifications-item-title">{{ cert.title }}</h3>
            <p v-if="cert.issuer" class="certifications-item-issuer">{{ cert.issuer }}</p>
            <p class="certifications-item-description">{{ cert.description[lang] }}</p>
          </div>
        </li>
      </ul>
      <div class="certifications-actions">
        <Link to="/certifications" class="certifications-view-all" data-cursor="arrow" data-sound="click">
          <Button renderAs="div" variant="border" class="children-unclickable" data-hoversound="hover">
            {{ t("view-all-certifications") }}
          </Button>
        </Link>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.certifications {
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
      color: var(--color-beige-500);
      --icon-color: var(--color-beige-500);
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
      max-width: 640px;
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
    display: grid;
    gap: var(--space-md);
    list-style: none;

    @include mixins.mq("md") {
      grid-template-columns: repeat(3, 1fr);
    }

    @include mixins.mq("lg") {
      grid-column: 3 / 11;
    }
  }

  &-item {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
    padding: var(--space-lg);
    border: var(--stroke-sm) solid var(--color-beige-700);
    border-radius: var(--radius-lg);
    background: var(--color-beige-400);
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

        .certifications-item-icon {
          border-color: var(--color-brand-300);
        }
      }
    }

    &-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 52px;
      height: 52px;
      flex-shrink: 0;
      font-size: 30px;
      line-height: 1;
      border-radius: var(--radius-md);
      background: var(--color-white-400);
      border: var(--stroke-sm) solid var(--color-beige-700);
      color: var(--color-brand-400);
      box-shadow: 0 4px 12px -8px rgba(0, 0, 0, 0.35);
      transition: border-color 0.15s ease-in-out;
    }

    &-body {
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
    }

    &-title {
      font-weight: 800;
      font-size: var(--font-size-md);
      line-height: 1.25;
      color: var(--color-text-400);
    }

    &-issuer {
      width: fit-content;
      font-size: var(--font-size-xs);
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: var(--color-brand-500);
    }

    &-description {
      font-size: var(--font-size-sm);
      color: var(--color-text-300);
      line-height: var(--line-height-copy);
    }
  }

  &-actions {
    grid-column: 1 / 13;
    display: flex;
    justify-content: center;
    margin-top: var(--space-xl);

    @include mixins.mq("lg") {
      grid-column: 3 / 11;
    }
  }

  &-view-all {
    width: fit-content;
  }
}
</style>
