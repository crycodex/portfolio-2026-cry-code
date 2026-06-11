<script setup lang="ts">
import { techIconPaths } from "./techPaths";

import type { TechSlug } from "./techPaths";

const props = defineProps<{
  slug: TechSlug;
}>();
</script>

<template>
  <svg :viewBox="techIconPaths[props.slug].viewBox" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
    <path :d="techIconPaths[props.slug].d" fill="currentColor" />
  </svg>
</template>
