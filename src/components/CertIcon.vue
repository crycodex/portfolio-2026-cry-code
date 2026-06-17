<script setup lang="ts">
import { computed } from "vue";
import { certIconData } from "../content/certIcons";

const props = defineProps<{
  name?: string;
}>();

const icon = computed(() => (props.name ? certIconData[props.name] : undefined));
const viewBox = computed(() => {
  const i = icon.value;
  return `0 0 ${i?.width ?? 24} ${i?.height ?? 24}`;
});
</script>

<template>
  <svg
    v-if="icon"
    class="cert-icon"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    :viewBox="viewBox"
    aria-hidden="true"
    v-html="icon.body"
  />
</template>

<style scoped lang="scss">
.cert-icon {
  display: block;
  color: inherit;
}
</style>
