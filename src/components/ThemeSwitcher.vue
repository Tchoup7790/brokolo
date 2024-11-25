<script setup>
import { useThemeStore } from '@/stores/themeStore';
import { computed } from 'vue';
import SunIcon from '@/components/icon/SunIcon.vue';
import MoonIcon from '@/components/icon/MoonIcon.vue';

const themeStore = useThemeStore();

const currentTheme = computed(() => themeStore.theme);

const toggleTheme = () => {
  themeStore.toggleTheme();
};
</script>

<template>
  <button @click="toggleTheme">
    <MoonIcon v-if="currentTheme == 'light'" />
    <SunIcon v-else />
  </button>
</template>

<style scoped>
button {
  background: transparent;
  border: none;
  margin: 0;
  padding: 0;
  height: fit-content;
  width: fit-content;
  cursor: pointer;
  stroke: var(--color-text-soft);
  padding: .2rem;
}
</style>
