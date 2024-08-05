export interface tUserRes {
  id: string;
  name: string;
  email: string;
  admin: boolean;
  createdAt: Date;
  updatedAt: Date;
}
export interface tUserReq {
  name: string;
  email: string;
  password: boolean;
}
export interface tLogin {
  email: string;
  password: boolean;
}
export interface tLoginRes {
  token: string;
  user: tUserRes;
}
