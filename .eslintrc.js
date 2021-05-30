module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["airbnb", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": "off",
    "no-use-before-define": "off",
    "react/jsx-props-no-spreading": "off",
    "import/prefer-default-export": "off",
    "consistent-return": "off",
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "no-shadow": "off",
  },
};
