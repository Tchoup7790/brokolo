<script setup>
import TopOpacityMotion from '@/components/motion/TopOpacityMotion.vue';
</script>

<template>
  <Transition appear>
    <main>
      <TopOpacityMotion delay="0">
        <h1>Hello I'M <span>Baptiste</span>,</h1>
      </TopOpacityMotion>
      <TopOpacityMotion delay="200">
        <h1>A <span>Developer</span> and</h1>
      </TopOpacityMotion>
      <TopOpacityMotion delay="400">
        <h1><span>Student</span> who</h1>
      </TopOpacityMotion>
      <TopOpacityMotion delay="600">
        <h1>Create Websites</h1>
      </TopOpacityMotion>
    </main>
  </Transition>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
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
