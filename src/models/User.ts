// define the user interface to type-check user data

export interface User {
  name: string;
  email: string;
  address: string;
}

export type Users = User[];
