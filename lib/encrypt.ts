import CryptoJS from "crypto-js";

const SECRET_KEY = process.env.NEXT_PUBLIC_SECRET_KEY as string;

export const encryptData = (text: string | number) => {  
  const data = CryptoJS.AES.encrypt(
    JSON.stringify(text),
    SECRET_KEY
  ).toString();

  return data;
};

export const decryptData = (text: string) => {
  try {
    const bytes = CryptoJS.AES.decrypt(text, SECRET_KEY);
    const data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  
    return data;
  } catch (error) {
    return ""
  }
};
