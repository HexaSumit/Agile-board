export type Role = "admin" | "user";

export interface User {
  id: number;
  username:string,
  email: string;   //  email instead of username
  password: string;
  role: Role;
}