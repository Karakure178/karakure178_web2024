// ===========================================
// ハンバーガーボタン開閉用 class add
// ===========================================
export const addHamburger = () => {
  const fixedBody = document.querySelector('body')
  fixedBody.classList.add('fixed__body')
}

// ===========================================
// ハンバーガーボタン開閉用 class remove
// ===========================================
export const removeHamburger = (type) => {
  const navigation = document.querySelector('.headerNavigation')
  const fixedBody = document.querySelector('body')

  fixedBody.classList.remove('fixed__body')

  if (type === 'resize') {
    navigation.classList.remove('animation__opacity')
  }
}
