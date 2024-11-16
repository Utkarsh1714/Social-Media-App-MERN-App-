import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "https://social-media-app-mern-app-backend.onrender.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
