import { Component } from '@angular/core';
import { Manufacturer } from './models/manufacturer.model';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-002-directivas';

  nombres: string[] = [
    'noemi', 'aitor', 'judith'
  ];

  manufactures: Manufacturer[] = [];

  products: Product[] = [
    {
      id: 1,
      title: 'produto 1',
      price: 49.99,
      available: true,
      publishDate: new Date(),
      manufacturer: {
        id: 1,
        name: 'Ford',
        startYear: 1960
      }
    },

    {
      id: 2,
      title: 'produto 2',
      price: 39.99,
      available: true,
      publishDate: new Date(),
      manufacturer: {
        id: 2,
        name: 'Honda',
        startYear: 1950
      }
    }
  ];

}
