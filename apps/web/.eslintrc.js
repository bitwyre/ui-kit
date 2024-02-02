/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [
    "@bitwyre/eslint-config",
    require.resolve("@vercel/style-guide/eslint/next"),
  ],
  parser: "@typescript-eslint/parser",
};
