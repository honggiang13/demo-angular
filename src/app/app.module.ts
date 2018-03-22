import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {SuiModule} from 'ng2-semantic-ui';
import { SharedModule } from './shared/shared.module';

import { BookService } from './services/book.service';


import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { BooksComponent } from './components/books/books.component';
import { BooksListThumbnailComponent } from './components/books-list-thumbnail/books-list-thumbnail.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, SuiModule, SharedModule, RoutingModule ],
  declarations: [ AppComponent, BooksComponent, BooksListThumbnailComponent ],
  providers: [ BookService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
