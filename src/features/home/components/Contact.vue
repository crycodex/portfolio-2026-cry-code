<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { transitions } from "../../../animations";
import { t } from "../../../i18n/utils/translate";
import Social from "../../../components/Social.vue";

const contactElement = ref<HTMLElement | null>(null);

onMounted(() => {
  if (contactElement.value) {
    transitions.contact.setup(contactElement.value);
  }
});

onUnmounted(() => {
  transitions.contact.destroy();
});
</script>

<template>
  <div class="contact grid" ref="contactElement">
    <div class="contact-photo">
      <img class="contact-photo-image" src="/img/me/meoriginal.webp" alt="" />
      <Social variant="background" />
    </div>
    <div class="contact-content">
      <h2 class="contact-title" v-html="t('lets-work-together')"></h2>
      <p class="contact-subtitle">{{ t("contact-subtitle") }}</p>
      <p class="contact-email">
        <a href="mailto:cry.code@mail.com" data-cursor="circle-white">cry.code@mail.com</a>
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.contact {
  width: 100%;
  max-width: calc(var(--svw) * 100);
  overflow: hidden;
  min-height: calc(var(--lvh) * 100);
  padding: var(--space-outer);
  padding-top: var(--space-lg);

  @include mixins.mq("md") {
    padding-top: var(--space-xxl);
  }

  &-photo {
    position: relative;
    grid-column: 1 / 13;
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
    align-items: flex-start;

    @include mixins.mq("sm") {
      grid-column: 1 / 5;
    }

    @include mixins.mq("md") {
      grid-column: 1 / 5;
    }

    @include mixins.mq("lg") {
      grid-column: 2 / 5;
    }

    &-image {
      width: 100%;
      max-width: 320px;
      aspect-ratio: 3 / 4;
      object-fit: cover;
      border-radius: var(--radius-md, 12px);
    }
  }

  &-content {
    position: relative;
    padding-top: var(--space-md);
    grid-column: 1 / 13;
    display: flex;
    flex-direction: column;
    gap: var(--space-md);

    @include mixins.mq("sm") {
      grid-column: 5 / 13;
    }

    @include mixins.mq("md") {
      gap: var(--space-xl);
      grid-column: 5 / 11;
      padding-top: var(--space-lg);
    }

    @include mixins.mq("lg") {
      grid-column: 5 / 11;
    }
  }

  &-subtitle,
  &-email {
    font-size: var(--font-size-md);
    line-height: 1.5;

    a {
      font-weight: 700;
      text-decoration: underline;
    }
  }

  &-title {
    font-weight: 900;
    letter-spacing: 0.02em;
    font-size: var(--font-size-title-md);

    @include mixins.mq("sm") {
      font-size: var(--font-size-title-lg);
    }

    @include mixins.mq("xl") {
      font-size: var(--font-size-title-xl);
    }
  }
}
</style>
