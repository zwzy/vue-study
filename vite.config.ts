import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import nightwatchPlugin from 'vite-plugin-nightwatch'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vue-study/', // 项目源路径 github上的项目
  plugins: [
    vue(),
    vueJsx(),
    nightwatchPlugin(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
