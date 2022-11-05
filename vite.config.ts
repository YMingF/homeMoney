import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
// @ts-nocheck
import { svgstore } from "./src/vite_plugins/svgstore";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";
import styleImport, { VantResolve } from "vite-plugin-style-import";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({
      transformOn: true, // 可用来替换事件的写法
      mergeProps: true, // 把class,style属性自动绑定到子组件的根元素
    }),
    svgstore(),
    styleImport({
      resolves: [VantResolve()],
    }),
  ],
});
