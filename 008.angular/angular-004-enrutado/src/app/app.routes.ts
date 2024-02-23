import { Routes } from '@angular/router';
import { ManufacturerListComponent } from './manufacturer-list/manufacturer-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';


export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'       
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'products',
        component: ProductListComponent

    },
    {
        path: 'manufactures',
        component: ManufacturerListComponent

    },
    // Dejar este enrutado al final del todo.
    {
        path: '**', //Ruta comodín, atrapa cualquier url no capturada anteriormente
        component: NotFoundComponent  
    }
    

];
