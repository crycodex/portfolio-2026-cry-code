<script setup lang="ts">
import NotchSection from "../../../components/NotchSection.vue";
import Banner from "../../../components/Banner.vue";
import { t } from "../../../i18n/utils/translate";
import { certifications } from "../../../content/certifications";
</script>

<template>
  <section class="certifications" id="certifications">
    <NotchSection class="certifications-notch-start" />
    <NotchSection class="certifications-notch-end" />
    <div class="grid">
      <div class="certifications-header">
        <Banner class="certifications-header-banner" :copy="t('certifications')" size="sm" animated />
        <h2 class="certifications-header-title">{{ t("certifications") }}</h2>
        <p class="certifications-header-subtitle">{{ t("certifications-subtitle") }}</p>
      </div>
      <ul class="certifications-list">
        <li v-for="cert in certifications" :key="cert.title" class="certifications-item">
          <h3 class="certifications-item-title">{{ cert.title }}</h3>
          <p class="certifications-item-issuer">{{ cert.issuer }}</p>
        </li>
      </ul>
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
    padding: var(--space-md);
    border: var(--stroke-sm) solid var(--color-beige-500);
    border-radius: var(--radius-md);
    background: var(--color-beige-400);

    &-title {
      font-weight: 700;
      font-size: var(--font-size-md);
      margin-bottom: var(--space-xs);
    }

    &-issuer {
      font-size: var(--font-size-sm);
      color: var(--color-text-400);
    }
  }
}
</style>
