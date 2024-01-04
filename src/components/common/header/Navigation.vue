<script setup>
import { ref } from "vue";

import { useHamburgerStore } from "../../../stores/isOpen";

import { headerData } from "./data.js";

const items = ref(headerData.navigationList);
const store = useHamburgerStore();
</script>

<template>
  <nav
    class="headerNavigation"
    :class="{
      'headerNavigation--active': store.isOpen,
      animation__opacity: store.isOpen,
    }"
  >
    <ul class="headerNavigation__list">
      <li v-for="item in items" :key="item.id" class="headerNavigation__item">
        <a class="headerNavigation__link" :href="item.link">
          {{ item.title }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@use "./Navigation.scss";
</style>
