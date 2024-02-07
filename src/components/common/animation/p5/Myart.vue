<script setup>
import p5 from "p5";
import { onMounted, ref } from "vue";

import { useLoadStore } from "../../../../stores/isLoad";

import { Loading } from "./Loading";
import fs from "./shader/normal.frag";
import vs from "./shader/normal.vert";

const store = useLoadStore();
const end = ref();

const sketch = function (p, one) {
  // let canvas;
  let maxNum = 100;
  let pg;
  let theShader1;
  let color0;

  // 初期セットアップ
  p.setup = () => {
    //    window.innerHeight * 0.9,

    // safari対策でouterHeightを使う
    // アドレスバー分へこんだり縮んだりするのを防ぐため。
    let canvas = p.createCanvas(
      p.windowWidth,
      window.outerHeight * 0.9,
      p.WEBGL
    );
    canvas.parent(one);

    p.frameRate(24);
    p.translate(p.width / 2, p.height / 2);
    p.strokeWeight(3);
    p.noFill();

    pg = p.createGraphics(p.width, p.height);
    pg.strokeWeight(3);
    pg.noFill();
    pg.stroke("#dcdcdc");
    theShader1 = p.createShader(vs, fs);
    color0 = "#234567";
  };

  let count = 0; // frameCount
  p.draw = () => {
    p.clear(); // shaderと噛むことで透過できる
    p.translate(-p.width / 2, -p.height / 2);
    pg.background(color0);

    // -------------------------------------------
    // ローディング画面設定
    // -------------------------------------------
    const shake = p.map(window.scrollY, 0, 2000, 5, 40);
    const w = p.width - p.width / 4;
    const h = p.height - p.height / 2.7;
    const init_load = () => {
      let load = new Loading(p, pg, 140, 150, 100, w, h, 10, shake);
      load.loading(count, p.radians(0));

      let load2 = new Loading(p, pg, 20, 80, 100, w, h, 10, shake);
      load2.loading(count, p.radians(15));

      let load3 = new Loading(p, pg, 50, 70, 100, w, h, 10, shake);
      load3.loading(50, p.radians(count));

      let load4 = new Loading(p, pg, 100, 130, 100, w, h, 10, shake);
      load4.loading(count, p.radians(150));

      let load5 = new Loading(p, pg, 90, 200, 100, w, h, 10, shake);
      load5.loading(15, p.radians(count + 120));
      load5.loading(15, p.radians(count + 240));
      load5.loading(15, p.radians(count + 0));

      let load6 = new Loading(p, pg, 100, 170, 100, w, h, 10, shake);
      load6.loading(10, p.radians(count + 190));
      load6.loading(10, p.radians(count + 70));
      load6.loading(10, p.radians(count + 310));
    };
    init_load();
    // -------------------------------------------
    // ローディング画面設定終わり
    // -------------------------------------------
    // シェーダーの描画
    const shaderImage = () => {
      p.shader(theShader1);
      theShader1.setUniform(`u_tex`, pg);
      theShader1.setUniform(`u_color`, rand_color(color0));
      theShader1.setUniform("u_resolution", [pg.width, pg.height]);
      theShader1.setUniform(`u_time`, -p.frameCount / 35);
    };
    shaderImage();

    p.image(pg, 0, 0);
    // -------------------------------------------
    // 画面更新設定
    // -------------------------------------------
    if (count < maxNum) {
      count++;
    } else {
      count = 0;
    }
    // -------------------------------------------
    // 画面更新設定終わり
    // -------------------------------------------
  };

  // 画面がリサイズすると発火する関数
  p.windowResized = () => {
    // p.resizeCanvas(window.innerWidth, window.outerHeight * 0.9, p.WEBGL);
    p.resizeCanvas(p.windowWidth, window.outerHeight * 0.9, p.WEBGL);
    pg.remove(); // 無限canvas増殖対策
    pg = p.createGraphics(p.width, p.height);
    pg.strokeWeight(3);
    pg.noFill();
    pg.stroke("#dcdcdc");
  };

  const rand_color = (colorCode) => {
    let rc = p.color(colorCode);
    return [p.red(rc) / 255.0, p.green(rc) / 255.0, p.blue(rc) / 255.0];
  };
};

// 親要素のHTMLElementを取得する
const props = defineProps({
  target: Object,
});

/* ===========================================
 * 全体処理用
 * ======================================== */
onMounted(() => {
  //console.log(end.value);

  const body = document.querySelector("body");
  body.style.overflow = "hidden";
  setTimeout(() => {
    const one = document.getElementById("one"); // TODO clientWidth回り見直す
    one.classList.add("is-loaded");
    new p5(sketch, one);
    store.toggleIsLoad();
    body.style.overflow = "";

    /* ===========================================
     * intersection observer用
     * ======================================== */

    // intersection observerを使ってopacityを変化させる
    // 参考：https://qiita.com/Kaitou/items/046d5b43eb6d798a87dd
    const options = {
      rootMargin: "0px",
      threshold: [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
    };

    const easeOutExpo = (x) => {
      return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
    };
    // コールバックの受け取り
    const callback = (entries, observer) => {
      //console.log(entries[0]);
      const firstEntry = entries[0];
      if (firstEntry.isIntersecting) {
        // 画面に入った時の処理
        // opacity処理を描く、スクロール量と連動させる
        const scroll = window.scrollY;
        const opacity = Math.max(
          0,
          1 - easeOutExpo(scroll / window.innerHeight)
        ); //この数値easingさせたい
        document.querySelector("#one").style.opacity = String(opacity);
      } else {
        document.querySelector("#one").style.opacity = "0";
        // 画面から出た時の処理
      }
    };

    // intersection observerを使ってopacityを変化させてる
    // ちょっとでもviewportから出たら少しずつopacityを下げる
    const observer = new IntersectionObserver(callback, options);
    observer.observe(document.getElementById("top"));

    // opacityのtransitionひっぺはがす用処理
    // 最初のcanvas表示はtransitionさせるが、それ以降はobserverでコントロールするためはがす
    one.addEventListener(
      "transitionend",
      () => {
        //console.log("transitionend");
        one.style.transition = "none";
      },
      true
    );
  }, 1000);

  // loadが終わったことを知らせる
  // loadが終わったことをLoading.vueとタイトルに伝える
  // Karakure178のアニメーションが終わったことをpiniaを通してwatchで受け取る
  // is-loadedを付与
});
</script>

<template>
  <div id="one" ref="end" class="loading__canvas"></div>
</template>

<style lang="scss" scoped>
@use "./Myart.scss";
.loading__canvas {
  width: 100vw;
  height: 100vh;
  position: fixed;
  opacity: 0;
  bottom: 0;
  transition: opacity 1s ease-in-out;
  &.is-loaded {
    opacity: 1;
  }
}
</style>
