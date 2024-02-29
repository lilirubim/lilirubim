import { Product } from "./product.model";

export interface Cart {
    id: number;
    // Many To One
    userId: number;
    date: Date;
    // One to Many
    products: Product[];
}