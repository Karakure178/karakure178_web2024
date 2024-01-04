<script setup>
import { useHead } from "unhead";
import { ref } from "vue";

// import Loading from "./../../components/common/animation/Loading.vue";
import Header from "./../../components/common/header/Header.vue";
import About from "./../../components/page/top/about/About.vue";
import Articles from "./../../components/page/top/articles/Articles.vue";
import Introduction from "./../../components/page/top/introduction/Intro.vue";
import Work from "./../../components/page/top/work/Work.vue";
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
  <!-- <Loading /> -->
  <Header />
  <main>
    <Introduction />
    <About />
    <Work />
    <Articles />
    <ScrollNav :sections="sectionList" />
  </main>
</template>

<style lang="scss" scoped>
@use "./Top.scss";
</style>
