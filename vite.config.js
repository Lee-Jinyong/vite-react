import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const viteConfig = defineConfig({
  plugins: [
    react({
      jsxRuntime: "automatic",
    }),
  ],
});

export default viteConfig;
