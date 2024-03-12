import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Book } from '../model/book.model';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css'
})
export class BookFormComponent {

  bookForm = this.fb.group({
    id: [0],
    isbn: [''],
    price: [0.0]
  });

  constructor(private fb: FormBuilder,
    private httpClient: HttpClient) {}

    save() {
      // Opción 1: extraer los valores del formulario manualmente uno por uno
      const book: Book = {
        id: this.bookForm.get('id')?.value ?? 0,
        isbn: this.bookForm.get('isbn')?.value ?? '',
        price: this.bookForm.get('price')?.value ?? 0.0
      }
      console.log(book);

      // Opción 2: Crea objeto en una sola linea
      const book2: Book = this.bookForm.value as Book;
      console.log(book2);

      // Enviar a backend
      const url = 'http://localhost:8080/books';
      this.httpClient.post(url, book).subscribe(bookFromBackend => {
        console.log(bookFromBackend);
      });

    }
}
