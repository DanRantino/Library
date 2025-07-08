// vite.config.ts
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
var vite_config_default = defineConfig({
  server: {
    port: 3e3
  },
  plugins: [tsConfigPaths(), tanstackStart()]
});
export {
  vite_config_default as default
};
