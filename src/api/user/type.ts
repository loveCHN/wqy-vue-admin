export interface loginForm {
  username?: string;
  password: string;
  loginname?: string;
}
interface dataType {
  token?: string;
  message: string;
}
export interface loginResData {
  code: number;
  data: dataType;
}
