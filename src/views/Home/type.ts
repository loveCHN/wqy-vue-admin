export interface LinkType {
  label: string;
  nums: number | string;
  path?: string;
  emergency?: true;
}
export interface ScrollType {
  url: string;
  label: string;
  path: string;
}
export interface NoticeType {
  label: string;
  path: string;
  emergency?: true;
}
