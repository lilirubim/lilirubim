import { Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookFormComponent } from './book-form/book-form.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';

export const routes: Routes = [
    {
        path: '',
        component: BookListComponent
    },
    {
        path: 'books',
        component: BookListComponent
    },
    {
        path:'books/:id/detail',
        component: BookDetailComponent
    },
    {
        path:'books/create',
        component: BookFormComponent
    },
    {
        path: 'authors/:id/detail',
        component: AuthorDetailComponent
    },
    {
        path:'books/:id/reserve',
        component: ReservationFormComponent
    }
];
