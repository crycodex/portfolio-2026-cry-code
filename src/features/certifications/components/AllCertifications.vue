<script setup lang="ts">
import { computed, onMounted } from "vue";
import Link from "../../../components/Link.vue";
import ArrowRight from "../../../components/icons/ArrowRight.vue";
import CertIcon from "../../../components/CertIcon.vue";
import { t } from "../../../i18n/utils/translate";
import { locale } from "../../../i18n/store";
import { lenis } from "../../../composables/useScroll";
import { useRouter } from "../../../composables/useRouter";
import { useFirstRoute } from "../../../composables/useFirstRoute";
import { certifications } from "../../../content/certifications";

import type { Locale } from "../../../i18n/types";

const lang = computed(() => (locale.value ?? "es") as Locale);

const router = useRouter();
const { isFirstRoute } = useFirstRoute();

const goBack = () => {
  if (isFirstRoute.value) {
    router.push("/");
  } else {
    router.back();
  }
};

onMounted(() => {
  lenis.value?.scrollTo(0, { immediate: true });
});
</script>

<template>
  <div class="all-certs">
    <div class="all-certs-inner grid">
      <button
        type="button"
        class="all-certs-back"
        @click="goBack"
        :aria-label="t('go-back')"
        data-cursor="arrow"
        data-sound="click"
        data-hoversound="hover"
      >
        <ArrowRight class="all-certs-back-icon" />
        <span>{{ t("go-back") }}</span>
      </button>
      <header class="all-certs-header">
        <div class="all-certs-header-copy">
          <h1 class="all-certs-title">{{ t("all-certifications") }}</h1>
          <p class="all-certs-subtitle">{{ t("certifications-subtitle") }}</p>
        </div>
      </header>

      <ul class="all-certs-list">
        <li v-for="cert in certifications" :key="cert.id" class="all-certs-item">
          <component
            :is="cert.url ? Link : 'div'"
            v-bind="cert.url ? { href: cert.url, external: true, 'data-cursor': 'arrow-external' } : {}"
            class="all-certs-card"
            data-hoversound="hover"
          >
            <div class="all-certs-card-icon">
              <CertIcon :name="cert.icon" />
            </div>
            <div class="all-certs-card-body">
              <h3 class="all-certs-card-title">{{ cert.title }}</h3>
              <p v-if="cert.issuer" class="all-certs-card-issuer">{{ cert.issuer }}</p>
              <p class="all-certs-card-description">{{ cert.description[lang] }}</p>
            </div>
          </component>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.all-certs {
  position: relative;
  z-index: var(--z-index-layout);
  width: 100%;
  min-height: calc(var(--lvh) * 100);
  background-color: var(--color-beige-600);
  color: var(--color-text-400);
  padding: calc(var(--height-header) + var(--space-xl)) var(--space-outer) var(--space-xxxl);

  &-inner {
    width: 100%;
  }

  &-header {
    grid-column: 1 / 13;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--space-md);
    margin-bottom: var(--space-xl);

    @include mixins.mq("lg") {
      grid-column: 2 / 12;
    }
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
    color: var(--color-text-300);
    max-width: 640px;
  }

  &-back {
    grid-column: 1 / 13;
    display: inline-flex;
    align-items: center;
    gap: var(--space-xs);
    width: fit-content;
    margin-bottom: var(--space-lg);
    padding: var(--space-xs) var(--space-md) var(--space-xs) var(--space-sm);
    border-radius: var(--radius-md);
    border: var(--stroke-md) solid var(--color-grayscale-400);
    background: transparent;
    color: var(--color-text-400);
    --icon-color: var(--color-text-400);
    font-size: var(--font-size-sm);
    font-weight: 700;
    cursor: pointer;
    transition:
      background-color 0.1s ease-in-out,
      border-color 0.1s ease-in-out;

    @include mixins.mq("lg") {
      grid-column: 2 / 12;
    }

    @include mixins.hover {
      &:hover {
        background-color: var(--color-grayscale-400);
        border-color: var(--color-brand-400);
      }
    }

    &-icon {
      width: var(--icon-size-sm);
      transform: rotate(180deg);
    }
  }

  &-list {
    grid-column: 1 / 13;
    display: grid;
    gap: var(--space-md);
    list-style: none;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));

    @include mixins.mq("md") {
      grid-template-columns: repeat(2, 1fr);
    }

    @include mixins.mq("lg") {
      grid-column: 2 / 12;
      grid-template-columns: repeat(3, 1fr);
    }
  }

  &-card {
    position: relative;
    height: 100%;
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

        .all-certs-card-icon {
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
}
</style>
