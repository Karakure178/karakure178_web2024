/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "@vue/eslint-config-prettier/skip-formatting",
    "plugin:eslint-plugin-import/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  // ブロックの順をvue公式準拠にする
  // 参考:https://eslint.vuejs.org/rules/block-order.html
  // 参考:https://vuejs.org/style-guide/rules-recommended.html#single-file-component-top-level-element-order
  rules: {
    "vue/block-order": [
      "error",
      {
        order: ["script", "template", "style"],
      },
    ],
    // 複数単語にしろとエラーを吐いたがあくまで勉強環境なのでoffにした
    // 参考：https://eslint.vuejs.org/rules/multi-word-component-names.html
    "vue/multi-word-component-names": "off",

    // swiperのimport errorを無視する
    // 参考：https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/no-unresolved.md
    "import/no-unresolved": [2, { ignore: ["swiper"] }],

    // importの並び替えを強制している
    // 参考：https://github.com/import-js/eslint-plugin-import
    // 参考：https://zenn.dev/riemonyamada/articles/02e8c172e1eeb1
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        pathGroups: [
          {
            pattern: "{react,react-dom/**,react-router-dom}",
            group: "builtin",
            position: "before",
          },
          {
            pattern: "@src/**",
            group: "parent",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        alphabetize: {
          order: "asc",
        },
        "newlines-between": "always",
      },
    ],
  },
};
