<script setup>
import { ref } from "vue";

import Article from "./Article.vue";
import { workData } from "./data.js";

const items = ref(workData.work);
const commonUrl = ref(workData.commonUrl);
</script>

<template>
  <section id="articles" class="articles">
    <div class="articles__inner">
      <h2 class="articles__heading">Articles</h2>
      <div v-for="item in items" :key="item.id" class="work__carousel">
        <Article :title="item.title" :date="item.date" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "./Articles.scss";
</style>
