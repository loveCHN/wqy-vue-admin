//用户相关接口
import request from "@/utils/request";
import menuListJson from "@/assets/json/authMenuList.json";
import type { loginForm, loginResData } from "./type";
enum API {
  LOGIN_URL = "/login/login_in",
  ROUTERINFO_URL = "/menu/operate_role",
}
export const reqLogin = (data: loginForm) => {
  return request<unknown, loginResData>({
    method: "POST",
    url: API.LOGIN_URL,
    data,
  });
};
/**
 * @description 获取路由信息接口
 * @returns 用户信息
 */
export const getAuthList = () => {
  return request({
    method: "GET",
    url: API.ROUTERINFO_URL,
  });
  return menuListJson;
};
