# @bitwyre/typescript-config

This is typescript config that usually use for our internal projects on our organization.

## Installation

```bash
npm i --save-dev @bitwyre/typescript-config
# or if you're using yarn
yarn add -D @bitwyre/typescript-config
```

## Usage

In your typescript config `tsconfig.json`

```json
{
  "extends": "@bitwyre/typescript-config/base.json",
  "compilerOptions": {
    "plugins": [
      {
        "name": "next"
      }
    ],
    "jsx": "react-jsx"
  },
  "include": [
    "next-env.d.ts",
    "next.config.js",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts"
  ],
  "exclude": ["node_modules"]
}
```

## What's in here

@bitwyre/typescript-config that including a compilerOptions and other configs that mostly used in our projects and other tools that using typescript
