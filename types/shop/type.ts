export type AcceptShopData = {
  name: string;
  email: string;
  phone: number | "";
  shopName: string;
  shopAdress: string;
  city: string;
  state: string;
  pincode: number | "";
  password: string;
  check?: boolean;
};

export type responseData = {
  status: boolean;
  message: string;
};
