<script setup>
import { useHead } from "unhead";
import { ref } from "vue";

// import Loading from "./../../components/common/animation/Loading.vue";
import Footer from "./../../components/common/footer/Footer.vue";
import Header from "./../../components/common/header/Header.vue";
import About from "./../../components/page/top/about/About.vue";
import Articles from "./../../components/page/top/articles/Articles.vue";
import Introduction from "./../../components/page/top/introduction/Intro.vue";
import Work from "./../../components/page/top/work/Work.vue";
import { headData } from "./data.js";

useHead({
  title: headData.title,
  meta: [{ property: "og:title", content: headData.title }],
  link: [{ rel: "stylesheet", href: headData.font }],
});
</script>

<template>
  <!-- <Loading /> -->
  <Header />
  <main>
    <Introduction />
    <About />
    <Work />
    <Articles />
  </main>
  <Footer />
</template>

<style lang="scss" scoped>
@use "./Top.scss";
</style>
