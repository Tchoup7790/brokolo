<template>
  <!-- blank for keep space in header -->
  <br>
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
