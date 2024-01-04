<script setup>
import { useHead } from "unhead";
import { ref } from "vue";

import About from "./../../components/page/top/about/About.vue";
import Introduction from "./../../components/page/top/introduction/Intro.vue";
import ScrollNav from "./../../components/ui/scroll/scrollNav/ScrollNav.vue";
import { headData, topData } from "./data.js";

useHead({
  title: headData.title,
  meta: [{ property: "og:title", content: headData.title }],
  link: [{ rel: "stylesheet", href: headData.font }],
});

const sectionList = ref(topData.scrollNav);
</script>

<template>
  <main>
    <Introduction />
    <About />
    <ScrollNav :sections="sectionList" />
  </main>
</template>

<style lang="scss" scoped>
@use "./Top.scss";
</style>
