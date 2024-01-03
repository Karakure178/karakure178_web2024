<script setup>
import { useMediaQuery } from "@vueuse/core";
import { ref, watch } from "vue";

import { useHamburgerStore } from "../../../stores/isOpen";

let isOpen = ref(false);
const store = useHamburgerStore();

// resize処理
const mediaQuery = useMediaQuery("(min-width: 769px)");
watch(
  () => mediaQuery.value,
  () => {
    store.toggleOff();
    console.log("値が変わった!!!");
  }
);
</script>

<template>
  <button class="hamburger" @click="store.toggleIsOpen">
    <span class="hamburger__text">MENU</span>
    <span>{{ isOpen }}</span>
  </button>
</template>

<style lang="scss" scoped>
@use "./Hamburger.scss";
</style>
