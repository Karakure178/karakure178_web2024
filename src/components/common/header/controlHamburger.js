let nowScrollY = 0; // スクロール位置を保持する変数

// ===========================================
// ハンバーガーボタン開閉用 class add
// ===========================================
export const addHamburger = () => {
  const fixedBody = document.querySelector("body");
  const fixedHTML = document.querySelector("html");
  stopScroll();
  fixedBody.classList.add("fixed__body");
  fixedHTML.classList.add("fixed__html");
};

// ===========================================
// ハンバーガーボタン開閉用 class remove
// ===========================================
export const removeHamburger = (type) => {
  const navigation = document.querySelector(".headerNavigation");
  const fixedBody = document.querySelector("body");
  const fixedHTML = document.querySelector("html");

  fixedBody.classList.remove("fixed__body");
  fixedHTML.classList.remove("fixed__html");
  restartScroll();

  if (type === "resize") {
    navigation.classList.remove("animation__opacity");
  }
};

// スクロール対策
// スクロールを止める
const stopScroll = () => {
  const fixedBody = document.querySelector("body");
  nowScrollY = window.pageYOffset;
  //console.log(nowScrollY, window.scrollY);
  fixedBody.style.top = "-" + nowScrollY + "px";
};

// スクロールを再開する
const restartScroll = () => {
  const fixedBody = document.querySelector("body");
  fixedBody.style.top = "0px";
  window.scrollTo(0, nowScrollY);
};
