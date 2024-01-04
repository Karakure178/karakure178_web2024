<script setup>
import { ref } from "vue";

// TODO カルーセル対応のためにdefinePropsに変更する
const item = defineProps({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <dl class="work__explantion">
    <dt class="workExplantion__title">Title:</dt>
    <dd class="workExplantion__titleText">{{ item.title }}</dd>
    <dt class="workExplantion__date">Date:</dt>
    <dd class="workExplantion__dateText">{{ item.date }}</dd>
  </dl>
</template>

<style lang="scss" scoped>
@use "./Explantion.scss";
</style>
