<script setup>
import { useTemplateRef, onMounted } from "vue"
import { useMotion } from "@vueuse/motion";

const props = defineProps({
  text: String,
})
const letters = props.text.split("")
const lettersRef = useTemplateRef("letter")

onMounted(() => {
  lettersRef.value.forEach((target, index) => {
    const delay = index * 50
    const { apply } = useMotion(target, {
      initial: {
        opacity: 0
      },
      visibleOnce: {
        opacity: 1,
        transition: {
          delay: delay,
        },
      },
    })
  })
})

</script>

<template>
  <div>
    <p v-for="(letter) in letters" ref="letter">
      {{ letter }}
    </p>
  </div>
</template>

<style scoped>
div {
  position: relative;
  height: fit-content;
  width: fit-content;
  display: inline-flex;
  overflow: hidden;
}

p {
  position: relative;
  transition: 5s;
}
</style>
