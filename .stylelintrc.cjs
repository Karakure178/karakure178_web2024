module.exports = {
  overrides: [
    {
      files: ["src/**/*.scss"],
      customSyntax: "postcss-scss",
    },
  ],
  plugins: ["stylelint-scss"],
  extends: ["stylelint-config-standard-scss", "stylelint-config-recess-order"],
  ignoreFiles: ["**/node_modules/**", "**/*.css"],
  rules: {
    "selector-class-pattern": null,
    "declaration-block-no-redundant-longhand-properties": [
      true,
      {
        ignoreShorthands: [
          "margin",
          "padding",
          "inset",
          "font",
          "background",
          "grid-template",
          "place-items",
        ],
      },
    ],
    // 演算子あとの改行を禁止する,80行で折りたたむためnullにした
    // 参考：https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/operator-no-newline-after
    // 参考：https://chromium.googlesource.com/external/github.com/twbs/bootstrap/+/v4.2.1/.stylelintrc
    "scss/operator-no-newline-after": null,
  },
};
