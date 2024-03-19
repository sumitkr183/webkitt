export interface IUserCreate {
  name: string;
  email: string;
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
  image: string;
  status: boolean;
  created: string;
}
