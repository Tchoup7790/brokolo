<template>
  <main>
    <h1>Want to say Hi ?</h1>
    <article>
      <section>
        <a href="mailto:juliojuliobaptiste@gmail.com">juliojuliobaptiste@gmail.com</a>
        <a href="mailto:juliojuliobaptiste@gmail.com" class="button">send message</a>
      </section>
      <section>
        <a href="https://www.linkedin.com/in/baptiste-julio-595823132/" target="_blank">LinkedIn</a>
        <a href="https://github.com/Tchoup7790" target="_blank">Github</a>
      </section>
    </article>
  </main>
</template>

<style scoped>
main {
  text-align: center
}

h1 {
  padding-bottom: 15vh;
}

article {
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  width: fit-content;
  gap: 7rem;
  padding: 7rem 14rem;
  transform-origin: right bottom;
}

section {
  height: 10vh;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  align-items: start;
}

.button {
  padding: 0.75rem 2rem;
  color: var(--color-background);
  background-color: var(--color-text);
}
</style>
