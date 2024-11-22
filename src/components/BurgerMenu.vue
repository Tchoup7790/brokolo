<script setup lang="ts">
import { ref } from 'vue';

const menu = ref(false)
const toggleMenu = () => menu.value = !menu.value
</script>

<template>
  <!-- blank for keep space in header -->
  <br>
  <div class="menu">
    <button v-if="!menu" @click="toggleMenu">OPEN MENU</button>
    <div class="nav" v-else="menu">
      <button @click="toggleMenu">CLOSE MENU</button>
      <nav>
        <RouterLink v-on:click="toggleMenu" to="/">
          <small>01</small>
          Home
        </RouterLink>
        <RouterLink v-on:click="toggleMenu" to="/work">
          <small>02</small>
          Work
        </RouterLink>
        <RouterLink v-on:click="toggleMenu" to="/contact">
          <small>03</small>
          Contact
        </RouterLink>
      </nav>
      <div class="border"></div>
      <footer>
        <a href="https://github.com/Tchoup7790" target="_blank">Github</a>
        <a href="https://www.linkedin.com/in/baptiste-julio-595823132/" target="_blank">LinkedIn</a>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.menu {
  position: fixed;
}

.nav {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: start;
  top: 0;
  left: 0;
  padding: 1rem;
  height: 100vh;
  width: 100vw;
  background-color: var(--color-background);
}

nav {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  justify-content: center;
  flex: 3;
  gap: 3rem;
  font-size: 1rem;
}

nav a {
  color: var(--color-text-soft);
  text-transform: capitalize;
  font-size: 2rem;
}

nav a.router-link-exact-active {
  position: relative;
  cursor: default;
  overflow: hidden;
  color: var(--color-text);
}

footer {
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 2rem 4.5rem;
  flex: 1;
  gap: 5rem;
  align-items: center;
}

button {
  background-color: var(--color-text);
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 6px;
  color: var(--color-background);
}

@media (min-width: 1025px) {
  .menu {
    display: none;
  }
}
</style>
