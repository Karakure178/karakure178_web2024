import p5 from "p5";

import { afin_translate, afin_rotate } from "./afin";
/**
 * ロード画面クラス
 * @class
 */
export class Loading {
  /**
   * Loadingクラスのコンストラクタ
   * @constructor
   * @param {number} p - p5.jsのインスタンス
   * @param {number} pg - p5.jsのgrahpicsインスタンス
   * @param {number} r - 円の半径
   * @param {number} maxR - 円の最大半径
   * @param {number} maxNum - 円の角度の分割量（アニメーションのカウント量）
   * @param {number} w - 中心点のx座標
   * @param {number} h - 中心点のy座標
   * @param {number} heightNum - 高さの分割数
   * @param {number[]} randomWidth - 高さごとでずらす幅を代入する配列
   */
  constructor(p, pg, r, maxR, maxNum, w, h, heightNum, randomWidth) {
    this.p = p;
    this.pg = pg;
    this.r = r;
    this.maxR = maxR;
    this.maxNum = maxNum;
    this.w = w; // 中心点
    this.h = h; // 中心点
    this.heightNum = heightNum; // 高さの分割数
    this.randomWidth = []; // 高さごとでずらす幅を代入する箱

    // 分割する高さ分、高さごとでずらす幅を代入する
    for (let i = 0; i < this.heightNum; i++) {
      this.randomWidth.push(p.random(-randomWidth, randomWidth));
    }
  }

  /**
   * 高さで分割して座標をずらす関数
   * @param {number[]} xy - ずらしたいx座標とy座標の配列
   * @param {number[]} randomWidth - 高さごとでずらす幅を代入する配列
   * @returns {number[]} - ずらした後のx座標とy座標の配列
   */
  noiseWidth(xy, randomWidth) {
    const p = this.p;
    const heightSplit = p.height / randomWidth.length; // heightNum分分割するときの高さ
    //console.log(heightSplit);
    for (let i = 0; i < randomWidth.length; i++) {
      if (xy[1] < heightSplit * i && heightSplit * (i - 1) < xy[1]) {
        xy[0] += randomWidth[i];
      } else if (i === 0 && xy[1] < heightSplit * i) {
        xy[1] += randomWidth[i];
      }
    }
    return xy;
  }

  /**
   * loading 線が円回転する関数
   * @param {number} num      頂点数
   * @param {number} rotate   回転角度（度数法）
   */
  loading(num, rotate) {
    const p = this.p; // p5.jsのインスタンスthisで呼ぶの面倒なので変数化
    let points = [];
    let maxPoints = [];
    let angle = 360 / this.maxNum; // 要固定
    for (let i = 0; i < num; i++) {
      const xy = afin_translate(
        this.r * p.cos(p.radians(angle * i)),
        this.r * p.sin(p.radians(angle * i)),
        this.w,
        this.h
      );
      const xy_radian = afin_rotate(rotate, xy[0], xy[1], this.w, this.h);

      const maxXY = afin_translate(
        this.maxR * p.cos(p.radians(angle * i)),
        this.maxR * p.sin(p.radians(angle * i)),
        this.w,
        this.h
      );
      const maxXY_radian = afin_rotate(
        rotate,
        maxXY[0],
        maxXY[1],
        this.w,
        this.h
      );

      const xy_radian_width = this.noiseWidth(xy_radian, this.randomWidth);
      points.push(new p5.Vector(xy_radian_width[0], xy_radian_width[1]));
      //points.push(new p5.Vector(xy_radian[0], xy_radian[1]));

      const maxXY_radian_width = this.noiseWidth(
        maxXY_radian,
        this.randomWidth
      );
      maxPoints.push(
        new p5.Vector(maxXY_radian_width[0], maxXY_radian_width[1])
      );
      //maxPoints.push(new p5.Vector(maxXY_radian[0], maxXY_radian[1]));
    }

    const pointsLast = afin_translate(
      this.r * p.cos(p.radians(angle * num)),
      this.r * p.sin(p.radians(angle * num)),
      this.w,
      this.h
    );
    const pointsLast_radian = afin_rotate(
      rotate,
      pointsLast[0],
      pointsLast[1],
      this.w,
      this.h
    );

    const pointsLast_radian_width = this.noiseWidth(
      pointsLast_radian,
      this.randomWidth
    );
    points.push(
      new p5.Vector(pointsLast_radian_width[0], pointsLast_radian_width[1])
    );
    //points.push(new p5.Vector(pointsLast_radian[0], pointsLast_radian[1]));

    const maxLast = afin_translate(
      this.maxR * p.cos(p.radians(angle * num)),
      this.maxR * p.sin(p.radians(angle * num)),
      this.w,
      this.h
    );
    const maxLast_radian = afin_rotate(
      rotate,
      maxLast[0],
      maxLast[1],
      this.w,
      this.h
    );
    const maxLast_radian_width = this.noiseWidth(
      maxLast_radian,
      this.randomWidth
    );
    maxPoints.push(
      new p5.Vector(maxLast_radian_width[0], maxLast_radian_width[1])
    );
    //maxPoints.push(new p5.Vector(maxLast_radian[0], maxLast_radian[1]));
    maxPoints.reverse();

    //ここから描画開始
    this.pg.beginShape();

    // 最初の点だけ描画する
    const zeroVertex = afin_rotate(
      rotate,
      afin_translate(
        this.maxR * p.cos(p.radians(0)),
        this.maxR * p.sin(p.radians(0)),
        this.w,
        this.h
      )[0],
      afin_translate(
        this.maxR * p.cos(p.radians(0)),
        this.maxR * p.sin(p.radians(0)),
        this.w,
        this.h
      )[1],
      this.w,
      this.h
    );
    const zeroVertex_width = this.noiseWidth(zeroVertex, this.randomWidth);
    this.pg.vertex(zeroVertex_width[0], zeroVertex_width[1]);
    // p.vertex(zeroVertex[0], zeroVertex[1]);

    for (let i = 0; i < (num + 1) * 2; i++) {
      if (i > num + 1 - 1) {
        this.pg.vertex(maxPoints[i - (num + 1)].x, maxPoints[i - (num + 1)].y);
      } else {
        this.pg.vertex(points[i].x, points[i].y);
      }
    }
    this.pg.endShape();
  }
}
