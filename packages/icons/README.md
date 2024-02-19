# Bitwyre Icons

Inc
luding our react icons based on figma design

## Usage

Bitwyre icons in all the same ways you can use SVGs (e.g. `img`, `background-image`, `inline`, `object`, `embed`, `iframe`). Here's a helpful article detailing the many ways SVGs can be used on the web: [SVG on the Web – Implementation Options](https://svgontheweb.com/#implementation)

With the Javascript library you can easily incorporate the icon you want in your webpage.

## Installation

yarn

```sh
yarn add @bitwyre/icons
```

npm

```sh
npm install @bitwyre/icons
```

pnpm

```sh
pnpm add @bitwyre/icons
```

## How to use

It's built with ES modules so it's completely tree-shakable.
Each icon can be imported as a react component.

### Example

You can pass additional props to adjust the icon.

```js
import {IdrCurrency} from "@bitwyre/icons";

const App = () => {
  return <IdrCurrency size={48} />;
};

export default App;
```

### Props

| name   | type     | default |
| ------ | -------- | ------- |
| `size` | _Number_ | 24      |

### Custom props

You can also pass custom props that will be added in the svg as attributes.

```js
const App = () => {
  return <UsdCurrency size={20} />;
};
```

### Generic icon component

It is possible to create a generic icon component to load icons.

> :warning: The example below is importing all ES modules. This is **not** recommended when you using a bundler since your application build size will grow substantially.

```js
const Icon = ({name, color, size}) => {
  const [components, setComponents] = useState({});

  useEffect(() => {
    const importComponents = async () => {
      try {
        // Dynamically import all components from "@bitwyre/icons"
        const module = await import("@bitwyre/icons");

        // Set the imported components in the state
        setComponents(module);
      } catch (error) {
        console.error("Error importing components:", error);
      }
    };

    // Call the function to import components
    importComponents();
  }, []);

  const BitwyreIcon = icons[name];

  return <BitwyreIcon {...{size}} />;
};
```
