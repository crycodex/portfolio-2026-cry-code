<script setup lang="ts">
import { computed } from "vue";
import { tagLabels, type TagVariant } from "./tagVariants";

const props = defineProps<{
  variant: TagVariant;
}>();

const classes = computed(() => ["tag", `tag-variant-${props.variant}`]);
</script>

<template>
  <div :class="classes">
    <p class="tag-copy">{{ tagLabels[props.variant] }}</p>
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

    &-gray {
      color: var(--color-text-400);
      border-color: var(--color-grayscale-400);
    }
  }
}
</style>
