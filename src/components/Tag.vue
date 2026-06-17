<script setup lang="ts">
import { computed } from "vue";
import { tagLabels, type TagVariant } from "./tagVariants";

const props = defineProps<{
  variant: TagVariant;
  label?: string;
}>();

const classes = computed(() => ["tag", `tag-variant-${props.variant}`]);
const copy = computed(() => props.label ?? tagLabels[props.variant]);
</script>

<template>
  <div :class="classes">
    <p class="tag-copy">{{ copy }}</p>
  </div>
</template>

<style scoped lang="scss">
.tag {
  border-radius: var(--radius-md);
  padding: calc(var(--space-xxs) - var(--stroke-md)) calc(var(--space-sm  ) - var(--stroke-md));
  border: var(--stroke-md) solid transparent;

  &-copy {
    font-size: var(--font-size-xs);
    font-weight: 700;
  }

  &-variant {
    &-three {
      background-color: #ed9c55;
      color: #492708;
    }

    &-react {
      background-color: #61dafb;
      color: #0f2e36;
    }

    &-typescript {
      background-color: #3178c6;
      color: white;
    }

    &-vercel {
      background-color: #111;
      color: white;
    }

    &-flutter {
      background-color: #54c5f8;
      color: #0a2a3a;
    }

    &-dart {
      background-color: #0175c2;
      color: white;
    }

    &-firebase {
      background-color: #ffca28;
      color: #3a2f00;
    }

    &-node {
      background-color: #237d23;
      color: white;
    }

    &-api {
      background-color: #5c6bc0;
      color: white;
    }

    &-javascript {
      background-color: #f7df1e;
      color: #3a3000;
    }

    &-vue {
      background-color: #42b883;
      color: #06281a;
    }

    &-html {
      background-color: #e34f26;
      color: white;
    }

    &-css {
      background-color: #1572b6;
      color: white;
    }

    &-tailwind {
      background-color: #38bdf8;
      color: #07344a;
    }

    &-php {
      background-color: #777bb4;
      color: white;
    }

    &-mysql {
      background-color: #4479a1;
      color: white;
    }

    &-mongodb {
      background-color: #47a248;
      color: white;
    }

    &-laravel {
      background-color: #ff2d20;
      color: white;
    }

    &-python {
      background-color: #3776ab;
      color: white;
    }

    &-android {
      background-color: #3ddc84;
      color: #06351a;
    }

    &-ios {
      background-color: #1d1d1f;
      color: white;
    }

    &-sparkar {
      background-color: #0082fb;
      color: white;
    }

    &-figma {
      background-color: #f24e1e;
      color: white;
    }

    &-adobexd {
      background-color: #470137;
      color: #ff61f6;
    }

    &-nextjs {
      background-color: #111;
      color: white;
    }

    &-astro {
      background-color: #ff5d01;
      color: white;
    }

    &-pinia {
      background-color: #ffd859;
      color: #3a3000;
    }

    &-gray {
      color: var(--color-text-400);
      border-color: var(--color-grayscale-400);
    }
  }
}
</style>
