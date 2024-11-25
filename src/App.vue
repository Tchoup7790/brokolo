<script setup>
import { RouterView } from 'vue-router'
import Menu from '@/components/Menu.vue';
import BurgerMenu from '@/components/BurgerMenu.vue';
import ThemeSwitcher from '@/components/ThemeSwitcher.vue';
import { useThemeStore } from '@/stores/themeStore';

const themeStore = useThemeStore()

themeStore.initializeTheme()
</script>

<template>
  <header>
    <Menu />
    <BurgerMenu />
    <div>
      <p>
        Nantes [FR]
      </p>
      <ThemeSwitcher />
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
  height: fit-content;
  width: 100vw;
  padding: 1rem;
  display: inline-flex;
  justify-content: space-between;
}

div {
  display: flex;
  flex-direction: column;
  align-items: end;
}

p {
  height: 24px;
  color: var(--color-text-soft);
}
</style>
