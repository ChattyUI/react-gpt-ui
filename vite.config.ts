import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "MyLibrary",
      formats: ["es", "cjs"],
      fileName: (format) => `my-library.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
