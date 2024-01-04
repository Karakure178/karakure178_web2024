<script setup>
import { ref } from "vue";

import { workData } from "./data.js";

const items = ref(workData.work);
</script>

<template>
  <dl v-for="item in items" :key="item.id" class="work__explantion">
    <dt class="workExplantion__title">Title:</dt>
    <dd class="workExplantion__titleText">{{ item.title }}</dd>
    <dt class="workExplantion__date">Date:</dt>
    <dd class="workExplantion__dateText">{{ item.date }}</dd>
  </dl>
</template>

<style lang="scss" scoped>
@use "./Explantion.scss";
</style>
