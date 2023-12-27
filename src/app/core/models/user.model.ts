export interface User {
  id?: number;
  name?: string;
  slug?: string;
  email?: string;
  role?: string;
  active?: boolean;
  wishlist?: any[];
  addresses?: any[];
  createdAt?: string;
  updatedAt?: string;
}


export interface LogInRequest {
    email:string;
    password:string
}