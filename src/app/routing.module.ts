import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BooksComponent } from './components/books/books.component';
import { BooksListThumbnailComponent } from './components/books-list-thumbnail/books-list-thumbnail.component';

const routes: Routes = [
    { path: '', component: BooksListThumbnailComponent },
    { path: 'books', component: BooksComponent },
    { path: 'book/:id', component: BooksComponent },
    { path: '**', redirectTo: '/notfound' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class RoutingModule {}
