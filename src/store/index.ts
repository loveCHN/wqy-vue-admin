import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
let pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
//对外暴露，入口文件需要安装仓库
export default pinia;
