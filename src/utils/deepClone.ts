const deepClone = <T>(obj: T): T => {
  // 判断传入的值是否为一个对象
  if (obj === null && typeof obj !== "object") {
    return obj;
  }
  // 判断对象的类型 注意这里不考虑包装类对象
  if (Object.prototype.toString.call(obj) === "[object Date]") {
    return new Date(obj) as any as T;
  }
  if (Object.prototype.toString.call(obj) === "[object RegExp]") {
    return new RegExp(obj) as any as T;
  }
  if (Object.prototype.toString.call(obj) === "[object Undefined]") {
    return new Error(obj) as any as T;
  }
  // 判断对象是类
  let newObj: any = Array.isArray(obj) ? [] : {};
  for (let item in obj) {
    if (typeof obj[item] === "object") {
      newObj[item] = deepClone(obj[item]);
    } else {
      newObj[item] = obj[item];
    }
  }
  return newObj;
};
export default deepClone;
