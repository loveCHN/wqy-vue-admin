// 引入路由配置模块
import router from "@/router";
// 引入 Vue Router 的 RouteRecordRaw 类型
import { RouteRecordRaw } from "vue-router";
// 引入 Element Plus 的通知组件
import { ElNotification } from "element-plus";
// 引入用户相关的 Store 模块
import useUserStore from "@/store/modules/user";
// 引入身份验证相关的 Store 模块
import useAuthStore from "@/store/modules/auth";
// 使用元编程导入 views 文件夹下的所有 Vue 文件
const modules = import.meta.glob("@/views/**/*.vue");
/**
 * @description 初始化动态路由
 */
export const initDynamicRouter = async () => {
  // 获取用户 Store 模块实例
  const userStore = useUserStore();
  // 获取身份验证 Store 模块实例
  const authStore = useAuthStore();
  try {
    // 1. 获取菜单列表和按钮权限列表
    await authStore.getAuthMenuList();
    // 2. 判断当前用户是否具有菜单权限
    if (authStore.authMenuListGet.length === 0) {
      // 如果没有菜单权限，显示警告通知
      ElNotification({
        title: "无权限访问",
        message: "当前账号无任何菜单权限，请联系系统管理员！",
        type: "warning",
        duration: 3000,
      });
      // 清除用户的令牌并重定向到登录页
      userStore.userLouout();
      router.replace("/login");
      return Promise.reject("没有权限");
    }
    // 3. 添加动态路由
    authStore.flatMenuListGet.forEach((item: any) => {
      // 删除菜单项的子菜单，如果存在
      item.children && delete item.children;
      // 如果菜单项有组件且组件类型是字符串，通过模块导入动态组件
      if (item.component && typeof item.component == "string") {
        item.component = modules[`/src/views${item.component}.vue`];
      }
      router.addRoute("layout", item);
    });
    // 4.添加404路由 为什么不直接添加在静态路由？
    //是因为浏览器刷新，刷新后无法第一时间拿到动态路由，会直接跳到404页面 暂时没有找到更好的办法
    router.addRoute({
      path: "/:catchAll(.*)",
      redirect: "/404",
    });
  } catch (error) {
    // 当按钮或菜单请求出错时，清除用户令牌并重定向到登录页
    userStore.userLouout();
    router.replace("/login");
    return Promise.reject(error);
  }
};
