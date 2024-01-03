<script setup>
import { ref } from "vue";

const sectionNav = defineProps({
  sections: {
    type: Object,
    required: true,
  },
});

// pythonでいうところのlist = [False] * len(sectionNav.sections)
// https://qiita.com/hidepy/items/3eff3d3ad7ff4447fd31
const list = [...Array(sectionNav.sections.length)].map(() => false);
const store = ref(list);

// 交差しているかどうかを判定する関数
// 交差している場合はclassを付与するためにstoreの値を変更する
const callback = (entries, observer) => {
  entries.forEach((entry) => {
    const id = entry.target.id;
    const index = sectionNav.sections.findIndex((item) => item.id === id);
    if (entry.isIntersecting) {
      console.log(store.value, "交差前");
      console.log("交差した", id);
      store.value = [...Array(sectionNav.sections.length)].map((_, i) =>
        i === index ? true : false
      );
      console.log(store.value);
    } else {
      console.log("交差していない");
      store.value = [...Array(sectionNav.sections.length)].map((_, i) =>
        i === index ? false : store.value[i]
      );
    }
  });
};

// classがactiveなら変える処理を施す
// intersection observerを使う
sectionNav.sections.forEach((item) => {
  const target = document.querySelector(item.href);
  console.log(target);
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const observer = new IntersectionObserver(callback, options);
  if (target) observer.observe(target); // ここで監視を開始する ない場合用のif(test)
});
</script>

<template>
  <div class="scrollNav">
    <ul class="scrollNav__list">
      <li
        v-for="(item, index) in sectionNav.sections"
        :key="item.id"
        class="scrollNav__item"
      >
        <a
          class="scrollNavItem__link"
          :class="{
            'is-active': store[index],
          }"
          :href="item.href"
        >
          <span>{{ store[index] }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@use "./ScrollNav.scss";
</style>
