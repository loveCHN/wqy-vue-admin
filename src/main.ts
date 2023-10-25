import App from "@/App.vue";
import directives from "./directives";
import router from "./router";
import pinia from "./store";
import { createApp } from "vue";
import ElementPlus from "element-plus";
import EditButton from "@/components/EditButton/EditButton.vue";
//@ts-ignore
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
const app = createApp(App);
import "@/styles/index.scss";
// 注册 Element Plus 图标组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app
  .use(router)
  .use(pinia)
  .use(directives)
  .use(ElementPlus, {
    locale: zhCn,
  })
  .component("EditButton", EditButton)
  .mount("#app");
