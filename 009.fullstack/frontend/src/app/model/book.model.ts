import { Author } from "./author.model";
import { Editorial } from "./editorial.model";

export interface Book {
    id: number;
    title: string;
    isbn: string;
    price: number;
    published: boolean;
    releaseDate: Date;


    // Asociación Many to One
    author: Author;
    editorial: Editorial;
}