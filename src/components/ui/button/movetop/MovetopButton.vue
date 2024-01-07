<script setup>
import MoveTo from "moveto";

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
  console.log("movetoClick");
};

// @click.stop.preventでaタグのデフォルトの挙動をキャンセル
// 参考:https://dezanari.com/vue-a-click-stop/
</script>

<template>
  <a
    class="movetopButton"
    :href="classList.href"
    @click.stop.prevent="movetoClick"
  ></a>
</template>

<style lang="scss" scoped>
@use "./MovetopButton.scss";
</style>
