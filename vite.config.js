import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5173, // Configura el puerto 5173
    strictPort: true, // Fuerza el uso del puerto 5173 y no cambia automáticamente
  },
});
