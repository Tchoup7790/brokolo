<script setup lang="ts">
import ToTopMotion from './motion/ToTopMotion.vue';
</script>

<template>
  <nav>
    <RouterLink to="/">
      <small>01 </small>
      <ToTopMotion text="Home" />
    </RouterLink>
    <RouterLink to="/work">
      <small>02 </small>
      <ToTopMotion text="Work" />
    </RouterLink>
    <RouterLink to="/contact">
      <small>03 </small>
      <ToTopMotion text="Contact" />
    </RouterLink>
  </nav>
</template>

<style scoped>
nav {
  position: fixed;
  display: none;
  flex-direction: column;
  font-size: 1rem;
}

nav a.router-link-exact-active {
  cursor: default;
  color: var(--color-text);
  overflow: hidden;
}

nav a.router-link-exact-active::before {
  background-color: var(--colo);
}

@media (min-width: 1025px) {
  nav {
    display: flex;
  }
}
</style>
