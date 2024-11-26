<script setup>
const props = defineProps({
  delay: Number,
})

import { onBeforeRouteLeave } from 'vue-router';
import { useTemplateRef } from "vue"
import { useMotion } from '@vueuse/motion';

const lettersRef = useTemplateRef("title")

const { apply } = useMotion(lettersRef, {
  initial: {
    y: 50,
    opacity: 0
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      delay: props.delay,
      duration: 800,
      ease: "easeInOut"
    }
  },
  leave: {
    opacity: 0,
    transition: {
      duration: 200,
      ease: ["easeInOut"]
    }
  },
})

onBeforeRouteLeave(async (to, from, next) => {
  await apply('leave');
  next();
});
</script>
<template>
  <div ref="title">
    <slot />
  </div>
</template>
