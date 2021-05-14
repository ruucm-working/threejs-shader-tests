module.exports = {
  extends: ["prettier/@typescript-eslint", "standard"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        semi: false,
        singleQuote: true,
        trailingComma: "es5"
      }
    ],
    quotes: 0,
    "space-before-function-paren": 0,
    "no-redeclare": 0,
    "prefer-const": 0
  }
}
