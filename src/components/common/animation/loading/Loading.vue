<script setup>
import { ref, watch } from "vue";

import { useLoadStore } from "../../../../stores/isLoad";
const store = useLoadStore();

watch(
  () => store.isLoad,
  () => {
    //console.log("isLoadが変わった");
  }
);
</script>

<template>
  <div
    class="loader"
    :class="{
      'is--hidden': store.isLoad,
    }"
  ></div>
</template>

<style lang="scss" scoped>
@use "./Loading.scss";
</style>
