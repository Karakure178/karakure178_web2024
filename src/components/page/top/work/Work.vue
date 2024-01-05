<script setup>
import { ref } from "vue";

import ReadButton from "../../../ui/button/common/CommonButton.vue";

import Explantion from "./Explantion.vue";
import { workData } from "./data.js";

const items = ref(workData.work);
const commonUrl = ref(workData.commonUrl);
</script>

<template>
  <section id="work" class="work">
    <div class="work__inner">
      <h2 class="work__heading">Work</h2>
      <div v-for="item in items" :key="item.id" class="work__carousel">
        <div class="work__image">
          <img :src="commonUrl + item.src" :alt="item.alt" />
        </div>
        <Explantion :title="item.title" :date="item.date" />
        <ReadButton
          :href="item.href"
          class-name="work__button"
          button-text="read code"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "./Work.scss";
</style>
