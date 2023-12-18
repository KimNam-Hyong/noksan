import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import cesium from 'vite-plugin-cesium'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 反向代理
  server: {
    port: 9000,
    host: "0.0.0.0",
    // 是否自动在浏览器打开
    // open: true,
    // 是否开启 https
    https: false,
    proxy: {

    },
  },

})
