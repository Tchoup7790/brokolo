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
        y: 20,
      },
      enter: {
        y: 0,
        transition: {
          delay: delay,
        },
      },
    })

    lettersRef.value[index].hover = async () => {
      await apply({
        y: -20,
        transition: {
          delay: delay,
        },
      })
      setTimeout(() => {
        apply("enter")
      }, 900)
    }
  })
})

const hover = () => {
  lettersRef.value.forEach((letter) => {
    letter.hover()
  });
};
</script>

<template>
  <div @mouseover="hover">
    <p v-for="(letter) in letters" ref="letter">
      {{ letter }}
      <span>
        {{ letter }}
      </span>
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
  cursor: pointer;
  transition: .35s;
}

span {
  position: absolute;
  bottom: -20px;
  left: 0;
  width: fit-content;
  height: fit-content;
}
</style>
