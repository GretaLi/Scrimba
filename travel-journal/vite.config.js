import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/scrimba/trevel-journal/",
  build: {
    outDir: "dist/trevel-journal",
  },
});