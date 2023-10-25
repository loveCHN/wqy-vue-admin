import deepClone from "./deepClone";
/**
 * @description 过滤数据 将0过滤成false 1过滤成true
 * @param response 需要过滤的数据
 * @param fieldList 过滤字段的名单
 * @returns 过滤后的值 0为false 1为true
 */
export const filterApiResponse = (response: any, fieldList: string[]): any => {
  // 使用 _.cloneDeep 进行深拷贝
  const clonedResponse = deepClone(response);
  const filterResponse = (data: any): any => {
    if (Array.isArray(data)) {
      // 如果是数组，递归处理每个元素
      return data.map((item: any) => filterResponse(item));
    } else if (typeof data === "object" && data !== null) {
      // 如果是对象，检查每个属性
      for (const key in data) {
        if (!(fieldList.length === 0 || fieldList.includes(key))) continue;
        if (data[key] == 0) {
          data[key] = false;
        } else if (data[key] == 1) {
          data[key] = true;
        } else if (typeof data[key] === "object" || Array.isArray(data[key])) {
          // 如果属性值是对象或数组，递归处理
          data[key] = filterResponse(data[key]);
        }
      }
      return data;
    } else {
      return data;
    }
  };

  // 在第一次递归调用中传递深拷贝的数据
  return filterResponse(clonedResponse);
};
