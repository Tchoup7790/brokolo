<script setup>
import { useTemplateRef, onMounted } from "vue"
import { useMotion } from "@vueuse/motion";

const switchLetters = ["@", "#", "&", "%", "§", "!", "°", "$", "*", "€", "=", "/", ":", ";", ">", "<", "^"]


const props = defineProps({
  text: String,
})
const letters = props.text.split("")
const lettersRef = useTemplateRef("letter")

onMounted(() => {
  lettersRef.value.forEach((target, index) => {
    const delay = Math.random() * index * 50
    const { apply } = useMotion(target, {
      initial: {
        y: 0,
      },
      enter: {
        y: -20,
        transition: {
          delay: delay * 2,
          repeatDelay: 800,
          duration: 0.05,
          repeat: window.screen.width > 1024 ? Infinity : 3,
          repeatType: 'mirror',
        },
      },
    })

    lettersRef.value[index].hover = async () => {
      await apply({
        y: 0,
        transition: {
          delay: delay,
          duration: 0.05
        },
      })

    }
    lettersRef.value[index].leave = async () => {
      await apply("enter")
    }
  })
})

const hover = () => {
  lettersRef.value.forEach((letter) => {
    letter.hover()
  });
};

const leave = () => {
  lettersRef.value.forEach((letter) => {
    letter.leave()
  });
};
</script>

<template>
  <div @mouseover="hover" @mouseleave="leave">
    <p v-for="(letter) in letters" ref="letter">
      {{ letter }}
      <span>
        {{ switchLetters[Math.floor(Math.random() * 16)] }}
      </span>
    </p>
  </div>
</template>

<style scoped>
div {
  position: relative;
  height: 100%;
  width: fit-content;
  display: inline-flex;
  overflow: hidden;
}

p {
  position: relative;
  cursor: pointer;
  transition: 0s;
}

span {
  position: absolute;
  bottom: -20px;
  left: 0;
  width: fit-content;
  height: fit-content;
}
</style>
