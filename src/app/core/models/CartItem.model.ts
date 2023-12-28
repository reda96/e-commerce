import { Product } from "./Product.model";

export interface CartItem {
    id: number,
    quantity: number
  }
export interface Cart {
    
  id: number,
  cartItems: Product[],
  totalCartPrice: number, // total was updated
  discountedTotal: number,  // discounted total was updated
  userId: number,
  numOfCartItems: number,  // total products were updated
  totalQuantity: number  // total quantity was updated
}