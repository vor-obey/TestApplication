import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { configDefaults } from 'vitest/config';
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
  test: {
    ...configDefaults,
    globals: true,
    environment: 'jsdom',
  },
  server: {
    open: true, // This will open the browser when the server starts
    port: 3000,
  },
});
