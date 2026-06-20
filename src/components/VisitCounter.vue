<script setup lang="ts">
import { useVisitCounter } from "../composables/useVisitCounter";
import { t } from "../i18n/utils/translate";

const { count } = useVisitCounter();
</script>

<template>
  <p class="visit-counter" v-if="count !== null">{{ t("visits") }}: {{ count }}</p>
</template>

<style scoped lang="scss">
.visit-counter {
  font-size: var(--font-size-md);
  color: var(--color-text-muted);
}
</style>
