import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';


export const routes: Routes = [
    {
        path: '',
        component: ProductListComponent

    },
    {
        path: 'products/:id/detalle',
        component: ProductDetailComponent

    },
    {
        path: 'users',
        component: UserListComponent

    },
    {
        path: 'users/:id/detalle',
        component: UserDetailComponent

    }
];
