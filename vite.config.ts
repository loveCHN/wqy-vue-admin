import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      script: {
        defineModel: true, // 开启defineModel功能
        propsDestructure: true, // 开启props结构响应式
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve("./src"), // 相对路径别名配置，使用 @ 代替 src
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://drugshop.yourcom.cn/shop", // 代理目标地址
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // 可选的路径重写规则
      },
    },
  },
  //scss全局变量
  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
        additionalData: '@import "./src/styles/variable.scss";',
      },
    },
  },
});
