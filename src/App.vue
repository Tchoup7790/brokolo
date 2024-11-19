<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">
        <small>01</small>
        Home
      </RouterLink>
      <RouterLink to="/work">
        <small>02</small>
        Work
      </RouterLink>
      <RouterLink to="/contact">
        <small>03</small>
        Contact
      </RouterLink>
    </nav>

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
  position: fixed;
  left: 0;
  top: 0;
  height: fit-content;
  width: 100vw;
  padding: 1rem;
  display: none;
  justify-content: space-between;
}

nav {
  display: flex;
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

.switch {
  color: var(--color-text-soft);
  cursor: pointer;
  transition: 0.5s opacity;
}

.switch:hover {
  color: var(--color-text);
}

.city {
  color: var(--color-text-soft);
}

@media (min-width: 425px) {
  header {
    display: inline-flex;
  }
}
</style>
