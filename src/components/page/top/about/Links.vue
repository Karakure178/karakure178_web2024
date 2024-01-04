<script setup>
import { ref } from "vue";

import { linkData } from "./data.js";

const items = ref(linkData.link);
const commonUrl = ref(linkData.commonUrl);
</script>

<template>
  <dt class="aboutText__likes">Links</dt>
  <div class="aboutText__likesGroup">
    <dd v-for="item in items" :key="item.id" class="aboutText__likesIcon">
      <a class="aboutText__link" :href="item.href">
        <img :src="commonUrl + item.src" :alt="item.alt" />
      </a>
    </dd>
  </div>
</template>

<style lang="scss" scoped>
@use "./Links.scss";
</style>
