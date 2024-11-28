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
    <SunIcon v-if="currentTheme == 'light'" />
    <MoonIcon v-else />
    <span>
      <MoonIcon v-if="currentTheme == 'light'" />
      <SunIcon v-else />
    </span>
  </button>
</template>

<style scoped>
button {
  position: relative;
  background: transparent;
  border: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  cursor: pointer;
  stroke: var(--color-text-soft);
  padding: .2rem;
  transition: .4s;
}

svg {
  position: relative;
  transition: .4s;
}

button:hover {
  stroke: var(--color-primary);
}

span {
  display: none;
}

@media (min-width: 1025px) {
  button:hover svg {
    transform: translateY(-40px);
  }

  span {
    display: block;
    position: absolute;
    height: fit-content;
    width: fit-content;
    left: 50%;
    transform: translateX(-50%);
    bottom: -40px;
  }
}
</style>
