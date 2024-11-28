<script setup>
import SwitchTextMotion from '@/components/motion/SwitchTextMotion.vue';
import TopOpacityMotion from '@/components/motion/TopOpacityMotion.vue';
</script>

<template>
  <main>
    <TopOpacityMotion delay="0">
      <h1>Want to say Hi ?</h1>
      <h2>Want to say Hi ?</h2>
    </TopOpacityMotion>
    <article v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { duration: 1200 } }"
      :leave="{ opacity: 0, transition: { duration: 200 } }">
      <section>
        <a href="mailto:juliojuliobaptiste@gmail.com">
          <SwitchTextMotion text="juliojuliobaptiste@gmail.com" />
        </a>
        <a href="mailto:juliojuliobaptiste@gmail.com" class="button">
          <SwitchTextMotion text="sendmessage" />
        </a>
      </section>
      <section class="otherLink">
        <a href="https://www.linkedin.com/in/baptiste-julio-595823132/" target="_blank">
          <SwitchTextMotion text="Linkedin" />
        </a>
        <a href="https://github.com/tchoup7790" target="_blank">
          <SwitchTextMotion text="github" />
        </a>
      </section>
    </article>
  </main>
</template>
<style scoped>
main {
  display: flex;
  align-items: center;
  justify-content: center;
}

h2 {
  display: block;
  padding-bottom: 15vh;
}

h1 {
  padding-bottom: 15vh;
  display: none;
  text-wrap: balance;
}

article {
  position: absolute;
  display: flex;
  width: fit-content;
  bottom: 3rem;
}

article a {
  text-transform: uppercase;
}

section {
  height: 10vh;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  align-items: start;
}

.otherLink {
  display: none;
}

.button {
  padding: 0.75rem 2rem;
  color: var(--color-background);
  background-color: var(--color-primary-soft);
  transition: background-color .4s;
}

.button:hover {
  background-color: var(--color-primary);
}


@media (min-width: 426px) {
  h1 {
    display: block;
  }

  h2 {
    display: none;
  }

  article {
    right: 0;
    bottom: 0;
    padding: 3.5rem 7rem;
    gap: 7rem;
    transform-origin: right bottom;
  }

  section {
    gap: 2rem;
  }

}


@media (min-width: 769px) {
  .otherLink {
    display: flex;
  }

  article {
    padding: 7rem 14rem;
  }
}
</style>
