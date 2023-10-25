//规定传给table组件分页器的数据
// export interface paginationInfoType {
//   pageNo: number;
//   pageSize: number;
//   pageSizeArr: Array<number>;
//   background: boolean;
//   small: boolean;
//   disabled: boolean;
//   total: number;
// }
export interface paginationInfoType {
  pageSize: number;
  total: number;
}

//定义一下传给table表格的interface
export interface tableInfoType {
  id: string;
  createTime: string;
  username: string;
  realname: string;
  account: string;
  password: string;
  phone: string;
  status: string; //1正常 0停止
}
//table表头
export interface tableColumnType {
  type?: "selection" | "index" | "expand";
  label?: string; //标题
  prop?: string; //api接口返回的字段名
  width?: string;
  fixed?: "left" | "right";
  slot?: string;
}
