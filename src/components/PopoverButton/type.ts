interface ButtonPathBasicType {
  title: string;
  path: string;
}
export interface ButtonPathListType {
  title: string;
  path?: string;
  childPathList?: Array<ButtonPathBasicType>;
}
