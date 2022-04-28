"use strict";

module.exports = {
  root: true,
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    requireConfigFile: false,
    babelOptions: {
      plugins: [
        ["@babel/plugin-proposal-decorators", { decoratorsBeforeExport: true }],
        ["@babel/plugin-proposal-class-properties"],
      ],
    },
  },
  plugins: ["ember"],
  extends: [
    "eslint:recommended",
    "plugin:ember/recommended",
    "plugin:prettier/recommended",
  ],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    "ember/no-jquery": "error",
    "prettier/prettier": "error",
    "ember/no-incorrect-calls-with-inline-anonymous-functions": 0,
    "ember/no-empty-glimmer-component-classes": 0,
  },
  overrides: [
    // node files
    {
      files: [
        ".eslintrc.js",
        ".prettierrc.js",
        ".template-lintrc.js",
        "addon-main.js",
        "blueprints/*/index.js",
        "config/**/*.js",
        "lib/*/index.js",
        "server/**/*.js",
      ],
      excludedFiles: ["config/deprecation-workflow.js"],
      parserOptions: {
        sourceType: "script",
      },
      env: {
        browser: false,
        node: true,
      },
      plugins: ["node"],
      extends: ["plugin:node/recommended"],
    },
  ],
};
