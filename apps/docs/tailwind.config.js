import BwTwConfig from "@bitwyre/ui-kit/tailwind.config";
import {nextui} from "@nextui-org/theme";

module.exports = {
  ...BwTwConfig,
  content: [
    ...BwTwConfig.content,
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@bitwyre/ui-kit/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    ...BwTwConfig.plugins,
    nextui({
      prefix: "nextui", // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "rgb(9, 22, 32)", // default theme from the themes object
      defaultExtendTheme: "rgb(9, 22, 32)", // default theme to extend on custom t
    }),
  ],
};
