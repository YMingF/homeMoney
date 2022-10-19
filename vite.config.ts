import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({
      transformOn: true, // 可用来替换事件的写法
      mergeProps: true, // 把class,style属性自动绑定到子组件的根元素
    }),
  ],
});
