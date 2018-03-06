import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';

import { BookService } from './services/book.service';


import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { BooksComponent } from './components/books/books.component';

import {SuiModule} from 'ng2-semantic-ui';

@NgModule({
  imports:      [ BrowserModule, FormsModule, SuiModule, SharedModule ],
  declarations: [ AppComponent, RoutingModule, BooksComponent ],
  providers: [ BookService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
