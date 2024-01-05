<script setup>
import { ref } from "vue";

import Article from "./Article.vue";
import { articlesData } from "./data.js";

const items = ref(articlesData.link);
const commonUrl = ref(articlesData.commonUrl);
</script>

<template>
  <section id="articles" class="articles">
    <div class="articles__inner">
      <h2 class="articles__heading">Articles</h2>
      <ul class="articles__group">
        <Article
          v-for="item in items"
          :key="item.id"
          :title="item.title"
          :date="item.date"
          :href="item.href"
          :src="commonUrl + item.src"
        />
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "./Articles.scss";
</style>
