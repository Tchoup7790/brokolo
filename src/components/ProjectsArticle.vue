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
      <a :href="url" target="_blank">Get the code</a>
    </section>
    <img :src='img' alt="projet index">
  </article>
</template>

<style scoped>
article {
  height: 75vh;
  position: relative;
  display: flex;
  align-items: center;
  gap: 4rem;
  flex-direction: column;
  padding: 15vw;
  justify-content: space-around;
  width: 100vw;
  overflow: hidden;
}

section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

div {
  width: 35vw;
}

p {
  text-align: justify;
}

img {
  width: 35vw;
}


@media (min-width: 425px) {
  article {
    flex-direction: row;
  }
}
</style>
