import axios from "axios";
import { getCookie } from "cookies-next";

import { ILoginProps, IRegisterProps } from "@/types/auth.type";
import { UNKNOWN_ERROR } from "./constants";
import { IUserCreate } from "@/types/user.type";
import { removeAllCookies } from "./utility";
import {
  ADD_USER,
  LOGIN,
  LOGOUT,
  OTP_VERIFY,
  REGISTER,
  RESTORE_USER,
} from "./endpoints";

export const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const loginUser = async (data: ILoginProps) => {
  try {
    const response = await client.post(LOGIN, data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.message || UNKNOWN_ERROR);
  }
};

export const registerUser = async (data: IRegisterProps) => {
  try {
    const response = await client.post(REGISTER, data);
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

    const response = await client.post(OTP_VERIFY, postData);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.message || UNKNOWN_ERROR);
  }
};

export const logoutUser = async () => {
  try {
    const response = await client.post(LOGOUT, "", {
      headers: {
        Authorization: "Bearer " + getCookie("token"),
      },
    });

    removeAllCookies();
  } catch (error: any) {
    throw new Error(error.response.data.message || UNKNOWN_ERROR);
  }
};

export const createUser = async (data: IUserCreate) => {
  try {
    const response = await client.post(ADD_USER, data, {
      headers: {
        Authorization: "Bearer " + getCookie("token"),
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.message || UNKNOWN_ERROR);
  }
};

export const deleteUser = async (data: { id: string | number }) => {
  try {
    const response = await client.post(RESTORE_USER, data, {
      headers: {
        Authorization: "Bearer " + getCookie("token"),
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.message || UNKNOWN_ERROR);
  }
};
