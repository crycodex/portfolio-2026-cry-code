<script setup lang="ts">
import NotchSection from "../../../components/NotchSection.vue";
import Banner from "../../../components/Banner.vue";
import { t } from "../../../i18n/utils/translate";
import { skills } from "../../../content/skills";
</script>

<template>
  <section class="about-me" id="about-me">
    <NotchSection class="about-me-notch-start" />
    <NotchSection class="about-me-notch-end" />
    <div class="grid">
      <div class="about-me-header">
        <Banner class="about-me-header-banner" :copy="t('about')" size="sm" animated />
        <h2 class="about-me-header-title">{{ t("about") }}</h2>
      </div>
      <div class="about-me-content">
        <p class="about-me-intro" v-html="t('about-intro')"></p>
        <p class="about-me-extra">{{ t("about-tagline") }}</p>
        <div class="about-me-skills">
          <span v-for="skill in skills" :key="skill" class="about-me-skill">{{ skill }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.about-me {
  position: relative;
  width: 100%;
  padding: 96px var(--space-outer);
  background-color: var(--color-beige-500);
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);

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

  &-content {
    grid-column: 1 / 13;
    display: flex;
    flex-direction: column;
    gap: var(--space-md);

    @include mixins.mq("lg") {
      grid-column: 3 / 11;
    }
  }

  &-intro,
  &-extra {
    font-size: var(--font-size-md);
    line-height: 1.6;

    @include mixins.mq("md") {
      font-size: var(--font-size-lg);
    }
  }

  &-skills {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-sm);
    margin-top: var(--space-sm);
  }

  &-skill {
    padding: var(--space-xs) var(--space-sm);
    border: var(--stroke-sm) solid var(--color-text-400);
    border-radius: var(--radius-md);
    font-size: var(--font-size-sm);
    font-weight: 700;
  }
}
</style>
