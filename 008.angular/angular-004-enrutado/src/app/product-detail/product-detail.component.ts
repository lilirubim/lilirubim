import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product.model';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [NgbAlertModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  // producto
  product: Product | undefined;

  

  // Angular inyecta este objeto en nuestro componente
  constructor(private activatedRoute: ActivatedRoute) {}

  // Este metodo es ejecutado por Angular automaticamente cuando un usuario
  // entra en este componente.
  // Sirve para cargar datos, llamar al backend, incializar, configurar...
  ngOnInit(): void {
    console.log('Hola mundo');
  
  // Capturar el id de la url para saber qué producto es el que hay que cargar
  this.activatedRoute.params.subscribe(params => {
    console.log(params);
    console.log(params['id']); //id es el nombre que asignamos en app.routes.ts

  // Aquí obtendríamos un product de backend, 
  //  let product: any = {
  //    id: params['id']
  //  };

  // Producto creado manualmente
  
  this.product = {
    id: 1,
    title: 'product1',
    price: 40,
    available: false,
    publishDate: new Date()
  };
  
  });

}

}
