<script setup>
import { ref } from "vue";
</script>

<template>
  <section id="work" class="work">
    <div class="work__inner">
      <h2 class="work__heading">Work</h2>
      <div class="work__carousel">
        <dl class="work__explantion">
          <dt class="workExplantion__title">Title:</dt>
          <dd class="workExplantion__titleText">Colorful shapes</dd>
          <dt class="workExplantion__date">Date:</dt>
          <dd class="workExplantion__dateText">2023-12-10</dd>
        </dl>
        <!-- TODO 要修正 共通コンポーネントから引っ張り出す -->
        <button class="work__codeButton">read code</button>
        <div class="work__image">
          <img :src="myicon" alt="自分のicon" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "./Work.scss";
</style>
