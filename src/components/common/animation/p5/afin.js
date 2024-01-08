/**
 * 3x3の行列計算を行う関数
 * @param {number[][]} a - 3x3の行列
 * @param {number[]} b - 3x1の行列
 * @returns {number[]} - 3x1の行列
 */
export function afin(a, b) {
  let x;
  let y;
  for (let k = 0; k < 3; k++) {
    let a0 = a[k][0] * b[0];
    let a1 = a[k][1] * b[1];
    let a2 = a[k][2] * b[2];
    if (k == 0) {
      x = a0 + a1 + a2;
    } else if (k == 1) {
      y = a0 + a1 + a2;
    }
  }
  return [x, y];
}

/**
 * afin変換の平行移動を行う関数
 * @param {number} x - 移動前のx座標
 * @param {number} y - 移動前のy座標
 * @param {number} tx - x軸方向の移動量
 * @param {number} ty - y軸方向の移動量
 * @returns {number[]} - 移動後の座標
 */
export function afin_translate(x, y, tx, ty) {
  let a = [
    [1, 0, tx],
    [0, 1, ty],
    [0, 0, 1],
  ];
  let b = [x, y, 1];
  return afin(a, b);
}

/**
 * afin変換の回転を行う関数
 * @param {number} shita - 回転角度（ラジアン）
 * @param {number} x - 回転前のx座標
 * @param {number} y - 回転前のy座標
 * @param {number} tx - 回転中心のx座標
 * @param {number} ty - 回転中心のy座標
 * @returns {number[]} - 回転後の座標
 */
export function afin_rotate(shita, x, y, tx, ty) {
  let a = [
    [Math.cos(shita), -Math.sin(shita), tx - tx * Math.cos(shita) + ty * Math.sin(shita)],
    [Math.sin(shita), Math.cos(shita), ty - tx * Math.sin(shita) - ty * Math.cos(shita)],
    [0, 0, 1],
  ];
  let b = [x, y, 1];
  return afin(a, b);
}
