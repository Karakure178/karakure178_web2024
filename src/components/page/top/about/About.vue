<script setup>
import { ref } from "vue";

import Likes from "./Likes.vue";
import Links from "./Links.vue";

// ref使って別物として書かないとエラーを吐き続けたので分けた
const myicon = ref("src/assets/image/top/about/myicon.png");
</script>

<template>
  <section id="about" class="about">
    <div class="about__inner">
      <h2 class="about__heading">About</h2>
      <div class="about__explantion">
        <div class="about__icon">
          <img :src="myicon" alt="自分のicon" />
        </div>
        <dl class="about__text">
          <Likes />
          <Links />
        </dl>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "./About.scss";
</style>
