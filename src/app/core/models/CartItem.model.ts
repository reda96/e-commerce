import { Product } from "./Product.model";

export interface CartItem {
    id: number,
    quantity: number
  }
export interface Cart {
    
  id: number,
  products: Product[],
  total: number, // total was updated
  discountedTotal: number,  // discounted total was updated
  userId: number,
  totalProducts: number,  // total products were updated
  totalQuantity: number  // total quantity was updated
}