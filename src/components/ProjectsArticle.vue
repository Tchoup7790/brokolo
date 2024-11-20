<script setup lang="ts">
const props = defineProps({
  img: String,
  url: String,
})
</script>

<template>
  <article>
    <section>
      <h3>
        <slot name="title"></slot>
      </h3>
      <p>
        <slot name="description"></slot>
      </p>
      <a :href="url" target="_blank">Want to see the code ?</a>
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
  padding: 1rem;
  justify-content: space-around;
  width: 100vw;
  overflow: hidden;
}

section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

div {
  width: 35vw;
}

p {
  text-align: justify;
}

img {
  width: 90vw;
}

a {
  text-transform: none;
}

@media (min-width: 769px) {
  article {
    height: 75vh;
    flex-direction: row;
    padding: 15vw;
  }

  section {
    gap: 2rem;
  }

  img {
    width: 35vw;
  }
}
</style>
