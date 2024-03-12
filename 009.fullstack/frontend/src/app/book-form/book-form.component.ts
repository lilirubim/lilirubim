import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Book } from '../model/book.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css'
})
export class BookFormComponent implements OnInit {

  bookForm = this.fb.group({
    id: [0],
    isbn: [''],
    price: [0.0]
  });

  constructor(private fb: FormBuilder,
    private httpClient: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

    }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      if(!id) return;

      this.httpClient.get<Book>('http://localhost:8080/books/' + id).subscribe(bookFromBackend => {
      // cargar el libro obtenido en el formulario bookForm
      this.bookForm.reset({
        id: bookFromBackend.id,
        isbn: bookFromBackend.isbn,
        price: bookFromBackend.price
      });
      });
    });
  }

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
      this.httpClient.post<Book>(url, book).subscribe(bookFromBackend => {
        console.log(bookFromBackend);
        
        // uno o otro:
        // navegar hacia el detail o el listado
       // this.router.navigate(['/books']);


        //navegar hacia detail
        this.router.navigate(['/books', bookFromBackend.id, 'detail']);
      }, error => {
        console.log(error);
        window.alert("Datos incorrectos")
      });

    }
}
