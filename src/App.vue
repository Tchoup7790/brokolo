<script setup>
import { RouterView } from 'vue-router'
import Menu from './components/Menu.vue';
import BurgerMenu from './components/BurgerMenu.vue';
</script>

<template>
  <header>
    <Menu />
    <BurgerMenu />
    <div>
      <p class="city">
        Nantes [FR]
      </p>
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

.city {
  color: var(--color-text-soft);
}
</style>
