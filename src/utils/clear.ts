export function clearObjectValues(obj: Record<string, any>) {
  Object.keys(obj).forEach((key) => {
    obj[key] = null; // 或者 obj[key] = undefined;
  });
}
