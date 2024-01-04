<script setup>
import { ref } from "vue";

import ReadButton from "../../../ui/button/common/CommonButton.vue";

import Explantion from "./Explantion.vue";
</script>

<template>
  <section id="work" class="work">
    <div class="work__inner">
      <h2 class="work__heading">Work</h2>
      <div class="work__carousel">
        <Explantion />
        <ReadButton
          href="https://translate.google.com/"
          class-name="work__button"
          button-text="read code"
        />
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
