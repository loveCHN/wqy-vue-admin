import { reactive, ref } from "vue";
//创建用户相关小仓库
import { defineStore } from "pinia";
//引入api接口
import { reqLogin } from "@/api/user";
import type { loginForm } from "@/api/user/type";
//引入路由 每个页面都可以使用路由信息
// import { constantRoute } from "@/router/routes";
// import { RouteRecordRaw } from "vue-router";
// import router from "@/router";
const modules = import.meta.glob("@/views/**/*.vue");
let useUserStore = defineStore(
  "User",
  () => {
    //用户登录的方法
    let token = ref<string>("");
    let userName = ref<string>("admin"); //暂时写死
    let dynamicMenus = reactive<any>([]);
    let avatar = ref<string>(
      "https://pic4.zhimg.com/v2-51a3d00d48a7ea701f093e859be21f45_b.jpg"
    ); //暂时写死
    //路由信息
    const userLogin = async (params: loginForm) => {
      let res = await reqLogin({
        password: params.password,
        loginname: params.username,
      });
      if (res.code == 200 && res.data.token) {
        //pinia存储token
        token.value = res.data.token;
        return Promise.resolve("成功");
      } else {
        return Promise.reject(res.data.message);
      }
    };
    // const userLogin = async (params: loginForm) => {
    //   token.value = "wqytoken";
    //   return Promise.resolve("成功");
    // };
    //获取用户信息,存储用户名与头像等
    const userInfo = async () => {
      //这里需要写获取用户信息逻辑 并返回promise
      //暂时写死用户信息
      userName.value = "admin";
      avatar.value = "头像";
      setTimeout(() => {
        return Promise.resolve("成功");
      }, 1000);
    };

    const userLouout = () => {
      //目前没有退出登录接口
      token.value = "";
      userName.value = "";
      avatar.value = "";
    };
    /**
     * 动态添加路由
     */
    const addDynamicRoutes = (menus: any) => {
      menus.forEach((item: any) => {
        dynamicMenus.push({
          path: item.unique_auth,
          component: modules["/src/views" + item.menu_path + ".vue"],
          // component: () => import(`${item.menu_path}`),
          meta: {
            title: item.platfunction,
            icon: item.icon,
          },
        });
        if (item.children && item.children.length > 0) {
          addDynamicRoutes(item.children);
        }
      });
    };
    return {
      token,
      userLogin,
      userName,
      avatar,
      userLouout,
      userInfo,
    };
  },
  {
    persist: true,
  }
);
export default useUserStore;
