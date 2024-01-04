<script setup>
import { ref } from "vue";

const classList = defineProps({
  className: {
    type: String,
    default: "",
  },
  buttonText: {
    type: String,
    default: "",
  },
  href: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <a class="commonButton" :class="classList.className" :href="classList.href">
    <span>
      {{ classList.buttonText }}
    </span>
  </a>
</template>

<style lang="scss" scoped>
@use "./CommonButton.scss";
</style>
