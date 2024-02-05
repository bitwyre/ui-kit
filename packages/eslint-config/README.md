# @bitwyre/eslint-config

This is ESLint rules that We usually use for our internal projects on our organization.

## Instalation

```bash
npm i --save-dev eslint @bitwyre/eslint-config
# or if you're using yarn
yarn add -D eslint @bitwyre/eslint-config
```

## Usage

In your eslint config `.eslintrc.js`

```js
module.exports = {
  extends: ["@bitwyre/eslint-config"],
};
```

## What's in here

@bitwyre/eslint-config uses custom ESLint rules to adjust based on entire project current needs. But it also uses some plugins and extend the configuration from external library:

- typescript-eslint/eslint-plugin : add some new useful plugin on typescript
- eslint-plugin-prettier : rule for eslint styling on code
- eslint-plugin-react-hooks : rule of hooks usage
- eslint-plugin-react : rule of react usage
- eslint-plugin-tailwindcss : to rule tailwind classes
- eslint-plugin-sonarjs : Automate rules for typescript with sonarlint and eslint parser

Please also for sorting classes tailwind you need to install prettier plugin for sort package by

```bash
npm install prettier-plugin-tailwindcss -D
# or
yarn add -D prettier-plugin-tailwindcss
```

and extend it into your prettier configuration for auto formating

```json
  "plugins": ["prettier-plugin-tailwindcss"]
```
