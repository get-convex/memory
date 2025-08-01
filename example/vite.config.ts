import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["pdfjs-dist"],
  },
  resolve: {
    conditions: ["@convex-dev/component-source"],
  },
});
