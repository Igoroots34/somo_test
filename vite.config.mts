import path from "path"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for the Somo Cyberpunk project.
// This config enables the React plugin and exposes environment
// variables from `.env` files. Additional configuration can be
// added here (e.g. aliases, dev server proxies) as the project
// evolves.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    'process.env': {}
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts']
  }
});