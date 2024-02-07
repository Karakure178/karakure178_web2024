<script setup>
import MoveTo from "moveto";
import { onMounted } from "vue";

const classList = defineProps({
  href: {
    type: String,
    default: "",
  },
});

const movetoClick = () => {
  const moveTo = new MoveTo();
  const target = document.querySelector(classList.href);
  moveTo.move(target);
  //console.log("movetoClick");
};

onMounted(() => {
  // intersection observerを使ってボタンの表示を切り替える
  const target = document.querySelector("#articles");
  const options = {
    rootMargin: "0px",
    threshold: 0,
  };
  const callback = (entries, observer) => {
    const firstEntry = entries[0];
    if (firstEntry.isIntersecting) {
      // 画面に入った時の処理
      //console.log("画面に入った");
      document.querySelector(".movetopButton").classList.add("is-active");
    } else {
      // 画面から出た時の処理
      //console.log("画面から出た");
      document.querySelector(".movetopButton").classList.remove("is-active");
    }
  };
  const observer = new IntersectionObserver(callback, options);
  observer.observe(target);
});

// @click.stop.preventでaタグのデフォルトの挙動をキャンセル
// 参考:https://dezanari.com/vue-a-click-stop/
</script>
<template>
  <a
    class="movetopButton"
    :href="classList.href"
    @click.stop.prevent="movetoClick"
  >
    <img src="@/assets/image/common/icon/arrow.svg" alt="movetop" />
  </a>
</template>

<style lang="scss" scoped>
@use "./MovetopButton.scss";
</style>
