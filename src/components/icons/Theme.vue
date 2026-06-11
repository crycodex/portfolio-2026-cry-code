<script setup lang="ts">
const props = defineProps<{
  active?: boolean;
}>();
</script>

<template>
  <svg overflow="visible" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g :class="{ 'theme-sun': true, 'theme-sun-active': !props.active }">
      <circle cx="12" cy="12" r="4.5" fill="var(--icon-color)" />
      <g stroke="var(--icon-color)" stroke-width="2" stroke-linecap="round">
        <line x1="12" y1="1.5" x2="12" y2="4" />
        <line x1="12" y1="20" x2="12" y2="22.5" />
        <line x1="1.5" y1="12" x2="4" y2="12" />
        <line x1="20" y1="12" x2="22.5" y2="12" />
        <line x1="4.6" y1="4.6" x2="6.4" y2="6.4" />
        <line x1="17.6" y1="17.6" x2="19.4" y2="19.4" />
        <line x1="4.6" y1="19.4" x2="6.4" y2="17.6" />
        <line x1="17.6" y1="6.4" x2="19.4" y2="4.6" />
      </g>
    </g>
    <path
      d="M21 14.5A8.5 8.5 0 0 1 9.5 3 8.5 8.5 0 1 0 21 14.5Z"
      fill="var(--icon-color)"
      :class="{ 'theme-moon': true, 'theme-moon-active': props.active }"
    />
  </svg>
</template>

<style scoped lang="scss">
.theme-sun,
.theme-moon {
  transition:
    transform 0.2s ease-in-out,
    opacity 0.2s ease-in-out;
  transform-origin: center;
  opacity: 0;
  transform: scale(0.6) rotate(-45deg);

  &-active {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
</style>
