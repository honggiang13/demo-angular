import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { BookService } from '../../services/book.service';
import { Book } from '../../shared/models/book.model';

@Component({
  selector: 'app-books-list-thumbnail',
  templateUrl: './books-list-thumbnail.component.html',
  styleUrls: ['./books-list-thumbnail.component.css']
})
export class BooksListThumbnailComponent implements OnInit {

  book = new Book();
  books: Book[] = [];
  isLoading = true;

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.bookService.getBooks(0, 10).subscribe(
      data => this.books = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }
}
