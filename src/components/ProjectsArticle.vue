<script setup>
import SwitchTextMotion from './motion/SwitchTextMotion.vue';

const props = defineProps({
  img: String,
  url: String,
})
</script>

<template>
  <article v-motion-slide-visible-once-bottom>
    <section>
      <h3>
        <slot name="title"></slot>
      </h3>
      <p>
        <slot name="description"></slot>
      </p>
      <a :href="url" target="_blank">
        <SwitchTextMotion text="WantToSeeTheCode?" />
      </a>
    </section>
    <img :src='img' alt="projet index">
  </article>
</template>

<style scoped>
article {
  height: fit-content;
  position: relative;
  display: flex;
  align-items: center;
  gap: 4rem;
  flex-direction: column;
  padding: 5vh 15vw;
  justify-content: space-around;
  width: 100vw;
  overflow: hidden;
  transition: .6s;
}

section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

p {
  text-align: justify;
}

img {
  width: 100%;
  border-radius: 6px;
}

a {
  text-transform: none;
  width: 100%;
}

@media (min-width: 1025px) {
  article {
    height: 75vh;
    flex-direction: row;
  }

  section {
    gap: 2rem;
  }

  img {
    width: 35vw;
  }
}

@media (min-width: 1441px) {
  img {
    flex: 1;
    height: auto;
  }

  section {
    flex: 1;
  }

}
</style>
