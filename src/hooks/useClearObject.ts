export const useClearObject = (obj: any) => {
  for (const key in obj) {
    obj[key] = "";
  }
  return obj;
};
