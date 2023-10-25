export const isEmptyObject = (obj: object): boolean =>
  Reflect.ownKeys(obj).length === 0;
