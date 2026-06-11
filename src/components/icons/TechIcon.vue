<script setup lang="ts">
import { techIconPaths } from "./techPaths";

import type { TechSlug } from "./techPaths";

const props = defineProps<{
  slug: TechSlug;
}>();
</script>

<template>
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
    <path :d="techIconPaths[props.slug]" fill="currentColor" />
  </svg>
</template>
