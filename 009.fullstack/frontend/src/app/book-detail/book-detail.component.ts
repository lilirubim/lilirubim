import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css'
})
export class BookDetailComponent implements OnInit{
  
  book: Book | undefined;

  constructor(

    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient
  ) {}

 
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];

      if (!id) return;

      const url = 'http://localhost:8080/books/' + id;
      this.httpClient.get<Book>(url).subscribe(b => this.book = b);

    })
  }

}
