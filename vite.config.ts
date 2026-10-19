import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa'
import {BASE_URL} from "./src/constants/baseUrl";
import {BASE_API} from "./src/constants/baseApi";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    VitePWA({ registerType: 'autoUpdate' }),
    vue({
      devTools: true,
    }),
  ],
});
