<script setup>
// 全ページ共通ファイル
// この中の設定は基本全ページ共通になる
import { createHead } from "unhead";
import { RouterView } from "vue-router";

createHead();
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
