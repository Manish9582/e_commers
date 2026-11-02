type CommonProfile = {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
};

type Shop = CommonProfile & {
  shopName: string;
  state: string;
  city: string;
  pincode: number;
};

export type Porfile = {
  user?: CommonProfile[];
  shopkeeper?: Shop[];
};

export type Messages = {
  status: boolean | null;
  message: string;
  loading: boolean;
  error: string;
};
