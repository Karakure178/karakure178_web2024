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
      <h1 class="introduction__Heading">
        <span class="introductionHeading introductionHeading__name">
          <span>Karakure178</span>
        </span>
        <span class="introductionHeading introductionHeading__job">
          <span>Frontend </span>
        </span>
        <span class="introductionHeading introductionHeading__job">
          <span>engineer. </span>
        </span>
      </h1>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "./Intro.scss";
</style>
