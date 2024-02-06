<script setup>
// アンカーリンクを押したときに発火するアニメーションコンポーネント
import gsap from "gsap";
import { onMounted } from "vue";

import { useHamburgerStore } from "../../../../stores/isOpen";

// ハンバーガーメニューがもし開いていたら閉じる用
const store = useHamburgerStore();

onMounted(() => {
  const ankerTransition = document.querySelector(".ankerTransition");
  const ankerLinks = document.querySelectorAll(".headerNavigation__link");

  for (const ankerLink of ankerLinks) {
    ankerLink.addEventListener("click", (e) => {
      e.preventDefault();
      const href = ankerLink.getAttribute("href");
      const targetElement = document.querySelector(href);
      ankerTransition.style.transformOrigin = "0 100vh";

      gsap.to(ankerTransition, {
        scaleY: 1,
        duration: 1,
        borderTopRightRadius: "0px",
        borderTopLeftRadius: "0px",
        ease: "power2.out",
      });

      const frame = { count: 0 };
      gsap.to(frame, {
        count: 1,
        duration: 1,
        ease: "linear",
        onComplete() {
          ankerTransition.style.transformOrigin = "0 0"; // 中心座標を切り替えてscaleの位置を変えてる/translate()と同じ
          gsap.to(ankerTransition, {
            scaleY: 0,
            duration: 1,
            ease: "power2.out",
          });
        },
      });

      const loop = () => {
        // アニメーション監視用gsapから値を見てジャンプのタイミングを決める
        if (frame.count > 0.8) {
          if (store.isOpen) store.toggleOff(); //もしハンバーガーメニューが開いていたら閉じる
          // hrefへジャンプする
          targetElement.scrollIntoView({
            behavior: "instant",
          });
        } else {
          window.requestAnimationFrame(loop);
        }
      };

      loop();
    });
  }
});
</script>

<template>
  <div class="ankerTransition"></div>
</template>

<style lang="scss" scoped>
@use "./AnkerTransition.scss";
</style>
