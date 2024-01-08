import { defineStore } from "pinia";
import { ref } from "vue";

// ローディング画面の表示を管理するストア
export const useLoadStore = defineStore("load", () => {
  const isLoad = ref(false);
  const isAnimeted = ref(false);

  /**
   * @function toggleIsLoad
   * @protected
   * @description
   * loading更新用関数<br>
   * loading(setTimeout)が完了するとisLoadがtrueになる<br>
   * クラスの付け替えが発生する
   */
  function toggleIsLoad() {
    if (isLoad.value) {
      isLoad.value = true;
    }
  }

  /**
   * @function toggleIsAnimeted
   * @protected
   * @description
   * loading後のアニメーション用関数<br>
   * タイトルアニメーションが完了するとisAnimetedがtrueになる<br>
   */
  function toggleIsAnimeted() {
    if (isAnimeted.value) {
      isAnimeted.value = true;
    }
  }

  return { isLoad, isAnimeted, toggleIsLoad, toggleIsAnimeted };
});
