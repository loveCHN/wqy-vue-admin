import { NavigationGuard, NavigationHookAfter } from "vue-router";
import useUserStore from "@/store/modules/user";
import router from "./index";
import useAuthStore from "@/store/modules/auth";
import { initDynamicRouter } from "./modules/dynamicRouter";
//@ts-ignore
import nprogress from "nprogress";
import "nprogress/nprogress.css";
nprogress.configure({ showSpinner: false });
/**
 * @description 重置路由
 * */
export const resetRouter = () => {
  const authStore = useAuthStore();
  authStore.flatMenuListGet.forEach((route: any) => {
    const { name } = route;
    if (name && router.hasRoute(name)) router.removeRoute(name);
  });
};
export const beforeEachGuard: NavigationGuard = async (to, from, next) => {
  document.title = `${to.meta.title}`;
  nprogress.start();
  let userStore = useUserStore();
  let authStore = useAuthStore();
  //判断是访问登陆页，有 Token 就在当前页面，没有 Token 就放行到登陆页
  if (to.path == "/login") {
    if (userStore.token) return next(from.fullPath);
    resetRouter();
    return next();
  }
  // 判断是否有 Token，没有重定向到 login 页面
  if (!userStore.token) return next({ path: "/login", replace: true });
  // 如果没有菜单列表，就重新请求菜单列表并添加动态路由
  if (authStore.authMenuList.length == 0) {
    await initDynamicRouter();
    return next({ ...to, replace: true });
  }
  next();
};

//用户未登录，跳转到login
//用户登录，不可访问login[指向home]
export const afterEachGuard: NavigationHookAfter = () => {
  nprogress.done();
};
