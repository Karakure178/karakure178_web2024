<script setup>
import Hamburger from "./Hamburger.vue";
import Logo from "./Logo.vue";
import Navigation from "./Navigation.vue";
</script>

<template>
  <header class="header">
    <div class="header__inner">
      <Logo />
      <Hamburger />
      <Navigation />
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "./Header.scss";
</style>
