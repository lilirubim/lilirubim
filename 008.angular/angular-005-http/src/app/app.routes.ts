import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path: 'products',
        component: ProductListComponent

    },
    {
        path: 'products/:id/detail',
        component: ProductDetailComponent

    },
    // Dejar este enrutado al final del todo.
    {
        path: '**', //Ruta comodín, atrapa cualquier url no capturada anteriormente
        component: NotFoundComponent   
    }
];
