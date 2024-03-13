import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Book } from '../model/book.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [HttpClientModule, RouterLink],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {

  books: Book[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {

    this.loadBooks();
  }
  delete(book: Book) {
    const url = 'http://localhost:8080/books/' + book.id;
    this.httpClient.delete(url).subscribe(response => this.loadBooks()); //recarga los libros despues de borrar
  }
  private loadBooks() {
    const url = 'http://localhost:8080/books';
    this.httpClient.get<Book[]>(url).subscribe(books => this.books = books);
  }
}
