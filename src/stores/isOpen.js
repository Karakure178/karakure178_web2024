import { defineStore } from 'pinia'
import { ref } from 'vue'

import { addHamburger, removeHamburger } from '../components/common/header/controlHamburger'

export const useHamburgerStore = defineStore('hamburger', () => {
  const isOpen = ref(false)

  /**
   * @function toggleIsOpen
   * @protected
   * @description
   * ハンバーガーボタンクリック用関数<br>
   * ボタンが押されるとトグルのようにfalseになったりtrueになったりする<br>
   * クラスの付け替えが発生する
   */
  function toggleIsOpen() {
    if (isOpen.value) {
      addHamburger()
      isOpen.value = false
    } else {
      removeHamburger()
      isOpen.value = true
    }
  }

  /**
   * @function toggleOff
   * @protected
   * @description
   * マッチメディア用関数<br>
   * 強制的にメニューをオフにする<br>
   */
  function toggleOff() {
    removeHamburger('resize')
    isOpen.value = false
  }

  return { isOpen, toggleIsOpen, toggleOff }
})
