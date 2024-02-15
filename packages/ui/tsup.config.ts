import {defineConfig} from "tsup";

export default defineConfig({
  entry: ["./index.ts"],
  splitting: false,
  sourcemap: true,
  dts: true,
  clean: true,
});
