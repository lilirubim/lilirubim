import { Component } from '@angular/core';
import { Product } from '../interfaces/product.models';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  names: string[] = [
    'persona1',
    'persona2',
    'persona3',
    'persona4'
  ];
  emails:string[] = []

  products: Product[] = [{
    id: 1,
    title: 'producto 1',
    price: 40.50,
    available: true
  },
  {
    id: 2,
    title: 'producto 2',
    price: 30.50,
    available: false
  },
  {
    id: 3,
    title: 'producto 3',
    price: 20.50,
    available: true
  }

];

}