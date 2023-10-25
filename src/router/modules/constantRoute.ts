//对外暴露常量路由
import type { RouteRecordRaw } from "vue-router";

export const constantRoute: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login/Login.vue"),
    meta: {
      title: "登录",
    },
  },
  {
    path: "/layout",
    name: "layout",
    component: () => import("@/Layout/Layout.vue"),
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("@/views/Home/Home.vue"),
        meta: {
          title: "首页",
          icon: "HomeFilled",
        },
      },
    ],
  },
  // {
  //   path: "/base",
  //   component: () => import("@/Layout/Layout.vue"),
  //   name: "base",
  //   meta: {
  //     icon: "Lock",
  //     title: "基础管理", //菜单标题,
  //   },
  //   redirect: "/base/user",
  //   children: [
  //     {
  //       path: "/base/ShopBuyOrder",
  //       component: () => import("@/views/base/ShopBuyOrder/ShopBuyOrder.vue"),
  //       name: "ShopBuyOrder",
  //       meta: {
  //         icon: "OfficeBuilding",
  //         title: "药店采购订单", //菜单标题,
  //       },
  //     },
  //     {
  //       path: "/base/SupplyObject",
  //       component: () => import("@/views/base/SupplyObject/SupplyObject.vue"),
  //       name: "SupplyObject",
  //       meta: {
  //         icon: "OfficeBuilding",
  //         title: "药店分类", //菜单标题,
  //       },
  //     },
  //     {
  //       path: "/base/Shop",
  //       component: () => import("@/views/base/Shop/Shop.vue"),
  //       name: "Shop",
  //       meta: {
  //         icon: "OfficeBuilding",
  //         title: "药店管理", //菜单标题,
  //       },
  //     },
  //     {
  //       path: "/base/BusiDistict",
  //       component: () => import("@/views/base/BusiDistrict/BusiDistict.vue"),
  //       name: "BusiDistict",
  //       meta: {
  //         icon: "OfficeBuilding",
  //         title: "商圈管理", //菜单标题,
  //       },
  //     },
  //     {
  //       path: "/base/Area",
  //       component: () => import("@/views/base/Area/Area.vue"),
  //       name: "Area",
  //       meta: {
  //         icon: "OfficeBuilding",
  //         title: "地区管理", //菜单标题,
  //       },
  //     },
  //     {
  //       path: "/base/CorptUserOprLog",
  //       component: () =>
  //         import("@/views/base/CorptUserOprLog/CorptUserOprLog.vue"),
  //       name: "CorptUserOprLog",
  //       meta: {
  //         icon: "OfficeBuilding",
  //         title: "操作日志", //菜单标题,
  //       },
  //     },
  //     {
  //       path: "/base/TradeCorp_SP",
  //       component: () => import("@/views/base/TradeCorp_SP/TradeCorp_SP.vue"),
  //       name: "TradeCorp_SP",
  //       meta: {
  //         icon: "OfficeBuilding",
  //         title: "收款账户", //菜单标题,
  //       },
  //     },
  //   ],
  // },
];
export const errorRouter: RouteRecordRaw[] = [
  {
    path: "/403",
    name: "403",
    component: () => import("@/views/ErrorMessage/403.vue"),
    meta: {
      title: "403页面",
    },
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/ErrorMessage/404.vue"),
    meta: {
      title: "404页面",
    },
  },
  {
    path: "/500",
    name: "500",
    component: () => import("@/views/ErrorMessage/500.vue"),
    meta: {
      title: "500页面",
    },
  },
  // Resolve refresh page, route warnings
  // {
  //   path: "/:pathMatch(.*)*",
  //   redirect: "/404",
  // },
];
