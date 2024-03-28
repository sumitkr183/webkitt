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

export const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

export const toBase64 = (str: string) => typeof window === "undefined" ? Buffer.from(str).toString("base64") : window.btoa(str);