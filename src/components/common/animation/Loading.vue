<script setup>
import { ref } from "vue";

// ローディングの円の個数
const circle_item = ref(10);
</script>

<template>
  <div class="loading">
    <div v-for="n in circle_item" :key="n" class="loading__circle"></div>
  </div>
</template>

<style lang="scss" scoped>
@use "./Loading.scss";

// v-bindを使って変数を渡せる
// 参考：https://zenn.dev/tentel/articles/736bfeaaa60ab3
* {
  // scss変数に値を渡すパターンは分からなかったのでCSS変数を使った
  --circle-num: v-bind(circle_item);
}
</style>
