//进行axios二次封装
//开发环境baseurl
// const baseURL = "http://drugweb.yourcom.cn/api/shop";
const baseURL = "/api";
import axios from "axios";
import useUserStore from "@/store/modules/user";
import { ElMessage } from "element-plus";
import { JsonSort } from "./encryption";
const keys = "v1Z6QZpdtSPUYLnHs8buzgFezjRHDbO5";
//创建一个axios实例
let request = axios.create({
  baseURL,
  timeout: 5000,
});
//request添加请求/响应拦截器
request.interceptors.request.use((config) => {
  //headers请求头 给服务器携带公共参数
  let userStore = useUserStore();
  if (config.method === "post") {
    config.data.timestamp = Date.now(); // 添加新的参数
    config.data = JsonSort(config.data, keys);
  }
  if (userStore.token) {
    config.headers.usertoken = userStore.token;
  }

  return config;
});
request.interceptors.response.use(
  (res) => res.data,
  (error) => {
    console.log(error);
    //定义一个变量
    let message = "";
    let status = error.response.status;
    switch (status) {
      case 400:
        message = "登陆错误";
        break;
      case 401:
        message = "登录信息无效";
        break;
      case 403:
        message = "无操作权限";
        break;
      case 500:
        message = "服务器出现问题";
        break;
      default:
        message = "网络错误";
        break;
    }
    ElMessage({
      type: "error",
      message,
    });
    return Promise.reject(error);
  }
);
export default request;
