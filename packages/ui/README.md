# Bitwyre UI Kit

Bitwyre UI SDK Component that built in with tailwindcss and radix UI
This component is created by our engineering also following design and web standards API. That using in our multi cross projects on our organization.

## Getting started

You have the following options to get our Bitwyre UI Kit SDK:

- Download the [latest release](https://github.com/uikit/uikit/releases/latest) with pre-built CSS and JS.
- Install with [npm](https://npmjs.com) to get all source files as they are available on GitHub: `npm install @bitwyre/ui-kit`
- Install with [yarn](https://yarnpkg.com/) to get all source files as they are available on GitHub: `yarn add @bitwyre/ui-kit`
- Install with [pnpm](https://pnpm.io/) to get all source files as they are available on GitHub: `pnpm add @bitwyre/ui-kit`

## Contributing

Finding bugs, sending pull requests or improving our docs - any contribution is welcome and highly appreciated. To get started, head over to our [contribution guidelines](CONTRIBUTING.md). Thanks!

## Usage.

First extend our library kit into your tailwind config

on tailwind.config.js

```js
//tailwind.config.js
import BwTwConfig from "@bitwyre/ui-kit/tailwind.config";

module.exports = {
  ...BwTwConfig,
  content: [
    ...BwTwConfig.content,
    "./node_modules/@bitwyre/ui-kit/**/*.{js,ts,jsx,tsx}",
    //other plugins
  ],
  plugins: [
    ...BwTwConfig.plugins,
    //other plugins
  ],
};
```

on postcss.config.js

```js
//postcss.config.js
module.exports = require("@bitwyre/ui-kit/postcss.config");
```

on entrypoint file

```ts
//in your App.tsx / route.tsx / index.tsx
import "@bitwyre/ui-kit/global.css";
```

and use it

```ts
import {Button} from "@bitwyre/ui-kit";
```

## Browser Support

| ![Firefox](https://raw.github.com/alrra/browser-logos/main/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/main/src/safari/safari_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/main/src/chrome/chrome_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/main/src/edge/edge_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/main/src/opera/opera_48x48.png) |
| ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| Latest ✔                                                                                 | Latest ✔                                                                              | Latest ✔                                                                              | Latest ✔                                                                        | Latest ✔                                                                           |

## Copyright and License

Copyright by Bitwyre Technologies and Bitwyre Engineering Teams.
