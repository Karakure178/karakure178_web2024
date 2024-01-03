<script>
import { ref, defineComponent } from "vue";

import { headerData } from "./data.js";

const items = ref(headerData.navigationList);
//https://zenn.dev/misaka/articles/e64617b671edf6

export default defineComponent({
  setup() {},
  data() {
    return {
      items: headerData,
    };
  },
});
</script>

<template>
  <div class="header__logo">
    <img :src="items.logoUrl" alt="178 logo" />
  </div>
</template>

<style lang="scss" scoped>
@use "./Logo.scss";
</style>
