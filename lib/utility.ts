import { deleteCookie, getCookie } from "cookies-next";
import { decryptData } from "./encrypt";

export const removeAllCookies = () => {
  deleteCookie("token");
  deleteCookie("role");
};

export const getUserRole = () => {
  return decryptData(getCookie("role") as string);
};

export const getHeaders = () => {
  return {
    headers: {
      Authorization: "Bearer " + getCookie("token"),
    },
  };
};

export const convertToDateString = (iosDate: string) => {
  try {
    return new Date(iosDate).toDateString();
  } catch (error: any) {
    console.error(error.message);
    return null;
  }
};
