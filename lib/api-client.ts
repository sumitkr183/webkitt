import axios from "axios";

import { ILoginProps, IRegisterProps } from "@/types/auth.type";
import { UNKNOWN_ERROR } from "./constants";

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const loginUser = async (data: ILoginProps) => {
  try {
    const response = await client.post("auth/login", data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.message || UNKNOWN_ERROR);
  }
};

export const registerUser = async (data: IRegisterProps) => {
  try {
    const response = await client.post("auth/signup", data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.message || UNKNOWN_ERROR);
  }
};

export const verifyEmail = async (otp: string) => {
  try {
    let postData = {
      userId: sessionStorage.getItem("uid"),
      otpCode: otp,
    };

    const response = await client.post("auth/otp-verification", postData);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.message || UNKNOWN_ERROR);
  }
};
