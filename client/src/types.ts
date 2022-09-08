type Dimensions = {
  height: number;
  width: number;
  depth: number;
};

type Product = {
  name: string;
  price: { amount: number; currency: string };
  description: string;
  productImage: string;
  dimensions: Dimensions;
  isInStock: boolean;
  isOnSale: boolean;
  showcased: boolean;
};

type User = {
  fname: string;
  lname: string;
  email: string;
  password: string;
  billingAddress: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  isAdmin: boolean;
  cart: Product[];
};

type UserStore<T> = {
  user: T;
  populateUserInfo: (user: T, data: T) => void;
};

export type { UserStore, User };