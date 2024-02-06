<script setup>
import { useHead } from "unhead";
import { ref } from "vue";

import AnkerTransition from "./../../components/common/animation/ankerTransition/AnkerTransition.vue";
import Footer from "./../../components/common/footer/Footer.vue";
import Header from "./../../components/common/header/Header.vue";
import About from "./../../components/page/top/about/About.vue";
import Articles from "./../../components/page/top/articles/Articles.vue";
import Introduction from "./../../components/page/top/introduction/Intro.vue";
import Work from "./../../components/page/top/work/Work.vue";
import MovetopButton from "./../../components/ui/button/movetop/MovetopButton.vue";
import { headData } from "./data.js";

useHead({
  title: headData.title,
  meta: [{ property: "og:title", content: headData.title }],
  link: [{ rel: "stylesheet", href: headData.font }],
});
</script>

<template>
  <Header />
  <main>
    <AnkerTransition />
    <Introduction />
    <About />
    <Work />
    <Articles />
  </main>
  <Footer />
  <MovetopButton href="#top" />
</template>

<style lang="scss" scoped>
@use "./Top.scss";
</style>
