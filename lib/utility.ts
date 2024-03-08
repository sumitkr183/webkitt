import { deleteCookie, getCookie } from "cookies-next";
import { decryptData } from "./encrypt";

export const removeAllCookies = () => {
  deleteCookie("token");
  deleteCookie("role");
};

export const getUserRole = () => {
  return decryptData(getCookie("role") as string);
};
