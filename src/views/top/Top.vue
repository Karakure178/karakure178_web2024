<script setup>
import { useHead } from "unhead";

import Introduction from "./../../components/page/top/introduction/Intro.vue";
import { headData } from "./data.js";

useHead({
  title: headData.title,
  meta: [{ property: "og:title", content: headData.title }],
  link: [{ rel: "stylesheet", href: headData.font }],
});
</script>

<template>
  <main>
    <Introduction />
  </main>
</template>

<style lang="scss" scoped>
@use "./Top.scss";
</style>
