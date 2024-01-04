<script setup>
import { ref } from "vue";

import Links from "./Links.vue";

// ref使って別物として書かないとエラーを吐き続けたので分けた
const myicon = ref("src/assets/image/top/about/myicon.png");
</script>

<template>
  <section id="about" class="about">
    <div class="about__inner">
      <div class="about__explantion">
        <h2 class="about__heading">About</h2>
        <dl class="about__text">
          <dt class="aboutText__likes">Likes</dt>
          <dd class="aboutText__likesExplanation">Creative coding</dd>
          <Links />
        </dl>
      </div>
      <div class="about__icon">
        <img :src="myicon" alt="自分のicon" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "./About.scss";
</style>
