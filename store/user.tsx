import { create } from "zustand";

interface IUser {
  id: number;
  name: string;
  email: string;
  image: string;
  address: string;
  city: string;
  state: string;
  industry: string;
  pincode: string;
  role: 1 | 2 | 3 | 4;
  status: 1 | 0;
}

interface IAuthUser extends IUser {
  addDetail: (user: IAuthUser) => void;
}

export const useAuthUser = create<IAuthUser>()((set) => ({
  id: 0,
  name: "",
  email: "",
  image: "",
  address: "",
  city: "",
  state: "",
  industry: "",
  pincode: "",
  role: 1,
  status: 1,
  addDetail: (user) => set(() => ({ ...user })),
}));
