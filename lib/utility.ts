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

export const getUserSearchParams = (
  params: Array<[string, string]>
): { [key: string]: string } => {
  let mergedParams: { [key: string]: string } = { page: "1" };
  for (const slug of params) {
    mergedParams[slug[0]] = slug[1];
  }

  return mergedParams;
};
