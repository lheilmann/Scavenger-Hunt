module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: [
    "react",
    "react-hooks",
    "prettier",
    "simple-import-sort",
    "only-warn",
  ],
  rules: {
    "prettier/prettier": [
      "error",
      { endOfLine: "auto" },
      { usePrettierrc: true },
    ],
    "react/display-name": "off",
    "react/prop-types": "off",
    "simple-import-sort/sort": "error",
    "import/no-webpack-loader-syntax": "off",
    "eslint/no-unused-vars": "off",
  },
};
