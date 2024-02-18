/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@bitwyre/eslint-config"],
  parser: "@typescript-eslint/parser",
  rules: {
    "@typescript-eslint/ban-ts-comment": "off",
  },
};
