<template>
  <Transition appear>
    <main>
      <h1>Hello, I'M <span>Baptiste</span></h1>
      <h1>A <span>Developer</span> and</h1>
      <h1><span>Student</span> who</h1>
      <h1>Create Website</h1>
    </main>
  </Transition>
</template>

<style scoped>
main {
  text-align: center
}

h1 {
  position: relative;
}

span {
  position: relative;
  border-radius: 7px;
  overflow: hidden;
}

span::before {
  position: absolute;
  content: " ";
  width: 100%;
  height: 1.5rem;
  left: 0;
  top: 0;
  z-index: -1;
  transform: scaleX(1);
  transform-origin: left bottom;
  background-color: var(--color-primary-soft);
  transition: transform 0.9s 0.3s cubic-bezier(0.96, 0, 0.5, 0.91);
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.6s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-from span::before,
.v-leave-to span::before {
  transform: scaleX(0);
}

@media (min-width: 425px) {
  span::before {
    height: 5.5rem;
  }
}
</style>
