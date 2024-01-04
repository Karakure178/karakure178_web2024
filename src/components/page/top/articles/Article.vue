<script setup>
const item = defineProps({
  href: {
    type: String,
    required: true,
  },
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: false,
    default: "",
  },
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <ul class="articles__list">
    <li class="articlesList__item">
      <a :href="item.href" class="articlesList__link">
        <img :src="item.src" :alt="item.alt" />
        <span class="articlesList__group">
          <p class="articlesList__title">{{ item.title }}</p>
          <span class="articlesList__date">{{ item.date }}</span>
        </span>
      </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@use "./Article.scss";
</style>
