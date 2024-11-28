<script setup>
import { RouterView } from 'vue-router'
import Menu from '@/components/Menu.vue';
import BurgerMenu from '@/components/BurgerMenu.vue';
import ThemeSwitcher from '@/components/ThemeSwitcher.vue';
import { useThemeStore } from '@/stores/themeStore';
import ToTopMotion from './components/motion/ToTopMotion.vue';

const themeStore = useThemeStore()

themeStore.initializeTheme()
</script>

<template>
  <header>
    <!-- blank for keep space in header -->
    <div></div>
    <Menu />
    <BurgerMenu />
    <ThemeSwitcher />
    <a href="https://maps.app.goo.gl/yzadPPtGPbPZSY616" target="_blank" class="topLeft">
      <ToTopMotion text="Nantes" />
      <p>[FR]</p>
    </a>
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
}

header>* {
  flex: 1;
}

.topLeft {
  display: flex;
  gap: 0.2rem;
  align-items: center;
  justify-content: end;
  color: var(--color-text-soft);
}

p {
  color: var(--color-text-soft);
}
</style>
