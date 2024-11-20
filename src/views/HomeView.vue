<template>
  <Transition appear>
    <main>
      <h1>Hello I'M <span>Baptiste</span></h1>
      <h1>A <span>Developer</span> and</h1>
      <h1><span>Student</span> who</h1>
      <h1>Create Website</h1>
    </main>
  </Transition>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: start;
  padding: 2rem;
}

h1 {
  position: relative;
  height: fit-content;
  line-height: 3.5rem;
  text-wrap: balance;
}

span {
  position: relative;
  height: fit-content;
  width: fit-content;
  border-radius: 7px;
  overflow: hidden;
}

span::before {
  position: absolute;
  content: " ";
  width: 100%;
  height: 84%;
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

@media (min-width: 1025px) {
  main {
    align-items: center;
  }

  h1 {
    line-height: normal;
  }
}
</style>
