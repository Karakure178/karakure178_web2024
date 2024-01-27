<script setup>
import Loading from "../../../common/animation/loading/Loading.vue";
import Myart from "../../../common/animation/p5/Myart.vue";

// アニメーション管理の記述をここに書く
</script>

<template>
  <section id="top" class="introduction">
    <Loading />
    <Myart />
    <div class="introduction__inner">
      <h1 class="introduction__name">Karakure178</h1>
      <p class="introduction__job">Frontend<br />engineer.</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "./Intro.scss";
</style>
