import { constantRoute } from "@/router/modules/constantRoute";
export function getFlatMenuList(menuList: any) {
  let newMenuList = JSON.parse(JSON.stringify(menuList));
  return newMenuList.flatMap((item: any) => [
    item,
    ...(item.children ? getFlatMenuList(item.children) : []),
  ]);
}
export function getShowMenuList(menuList: any) {
  let newMenuList = JSON.parse(JSON.stringify(menuList));
  return newMenuList.filter((item: any) => {
    item.children?.length && (item.children = getShowMenuList(item.children));
    return !item.meta?.isHide;
  });
}

export const getAllMenuListGet = (menuList: any) => [
  ...constantRoute,
  ...transformData(menuList),
];
function transformData(menuList: any) {
  let newMenuList = JSON.parse(JSON.stringify(menuList));
  return newMenuList.map((item: any) => ({
    path: item.unique_auth,
    meta: {
      icon: item.icon,
      title: item.platfunction,
    },
    children: item.children ? transformData(item.children) : [],
  }));
}
