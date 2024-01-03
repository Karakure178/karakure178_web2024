<script setup>
const sectionNav = defineProps({
  sections: {
    type: Object,
    required: true,
  },
});

console.log(sectionNav.sections);
</script>

<template>
  <div class="scrollNav">
    <ul class="scrollNav__list">
      <li
        v-for="item in sectionNav.sections"
        :key="item.id"
        class="scrollNav__item"
      >
        <a class="scrollNavItem__link" :href="item.href">
          <span></span>
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@use "./ScrollNav.scss";
</style>
