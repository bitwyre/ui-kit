import {defineConfig} from "tsup";

export default defineConfig({
  entry: ["./index.ts"],
  splitting: false,
  format: ["cjs", "esm"],
  sourcemap: true,
  dts: true,
  clean: true,
});
