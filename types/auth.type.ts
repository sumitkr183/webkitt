import { ReactNode } from "react";

export interface IAuthWrapper {
  children: ReactNode;
  type: string;
  title: string;
  description: string;
  image: string;
}

export interface ILoginProps {
  username: string;
  password: string;
}

export interface IRegisterProps {
  name: string;
  email: string;
  phone: string;
  industry: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  password: string;
  confirmPassword: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  phone: string;
  industry: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  role: number;
  image: string;
  status: boolean;
}

export interface ILoginSuccess {
  status: boolean;
  data?: {
    user: IUser;
    token: string;
  };
}
