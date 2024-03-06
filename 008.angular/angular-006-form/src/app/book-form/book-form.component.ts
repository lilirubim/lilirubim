import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Book } from '../models/book.model';

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
    title: [''],
    price: [0.0],
    available: [false],
    publishDate: [new Date()]
  });

  constructor(private fb: FormBuilder) {}
  save (){
    console.log("Guardando book");

      // Extraer los valores de cada input escritos por el usuario
    const id = this.bookForm.get('id')?.value ?? 0;
    const title = this.bookForm.get('title')?.value ?? 'título por defecto';
    const price = this.bookForm.get('price')?.value ?? 0.0;
    const available = this.bookForm.get('available')?.value ?? false;
    const publishDate = this.bookForm.get('publishDate')?.value ?? new Date;

    // Crear un objeto utilizando los valores extraìdos
    const bookToSave: Book = {
      id: id,
      title: title,
      price: price,
      available: available,
      publishDate: publishDate
    }
    console.log(bookToSave);

    // Enviar el objeto a backend utilizando HttpClient


  }
}
