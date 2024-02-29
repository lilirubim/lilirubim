import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [HttpClientModule], // conectar el backend con frontend
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  
  // atributos
  products: Product[] = []; // rellenar este array con productos del backend

  // constructores
  constructor(private http: HttpClient) {} // el constructor solo inyecta cosas

  //métodos  
  ngOnInit(): void {
    
    // traer los productos del backend 
    //crea y ejecuta una petición HTTP contra un controlador Backend
    let urlBackend= 'https://fakestoreapi.com/products'; // se puede usar el link JSON, ejemplo: http://localhost8080/users
    this.http.get<Product[]>(urlBackend).subscribe(products => this.products = products);
  }

}
