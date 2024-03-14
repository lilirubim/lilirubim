import { Author } from "./author.model";

export interface Book {
    id: number;
    isbn: string;
    price: number;
    // Asociación Many to One
    author: Author;
}