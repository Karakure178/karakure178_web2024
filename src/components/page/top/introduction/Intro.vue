<script setup>
import { ref } from "vue";

import { useLoadStore } from "../../../../stores/isLoad";
import Loading from "../../../common/animation/loading/Loading.vue";
import Myart from "../../../common/animation/p5/Myart.vue";

// アニメーション管理の記述をここに書く
const store = useLoadStore();

// このコンポーネントのDOMを取得(p5.jsのcanvasのopacityを変更するため)
const target = ref();
</script>

<template>
  <section id="top" ref="target" class="introduction">
    <Loading />
    <Myart :target="target" />
    <div class="introduction__inner">
      <h1 class="introduction__Heading">
        <span
          class="introductionHeading introductionHeading__name"
          :class="{ 'is--active': store.isLoad }"
        >
          <span>Karakure178</span>
        </span>
        <span
          class="introductionHeading introductionHeading__job"
          :class="{ 'is--active': store.isLoad }"
        >
          <span>Frontend </span>
        </span>
        <span
          class="introductionHeading introductionHeading__job"
          :class="{ 'is--active': store.isLoad }"
        >
          <span>engineer. </span>
        </span>
      </h1>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "./Intro.scss";
</style>
