<script setup>
import Links from "./Links.vue";
</script>

<template>
  <section id="about" class="about">
    <div class="about__inner">
      <h2 class="about__heading">About</h2>
      <dl class="about__text">
        <dt class="aboutText__likes">Likes</dt>
        <dd class="aboutText__likesExplanation">Creative coding</dd>
        <Links />
      </dl>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "./About.scss";
</style>
