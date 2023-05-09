import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [vue({template:{transformAssetUrls}}), vueJsx()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./', import.meta.url)),
      },
      { find: '@assets', replacement: fileURLToPath(new URL('./src/shared/assets', import.meta.url)) },
      { find: '@cmp', replacement: fileURLToPath(new URL('./src/shared/cmp', import.meta.url)) },
      { find: '@stores', replacement: fileURLToPath(new URL('./src/shared/stores', import.meta.url)) },
      { find: '@use', replacement: fileURLToPath(new URL('./src/shared/use', import.meta.url)) },
    ],
  },
})
