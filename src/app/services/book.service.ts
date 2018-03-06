import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Book } from '../shared/models/book.model';

@Injectable()
export class BookService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('http://159.65.5.18:3000/books');
  }

  countBooks(): Observable<number> {
    return this.http.get<number>('http://159.65.5.18:3000/books/count');
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>('http://159.65.5.18:3000/book', book);
  }

  getBook(book: Book): Observable<Book> {
    return this.http.get<Book>(`http://159.65.5.18:3000/book/${book._id}`);
  }

  editBook(book: Book): Observable<string> {
    return this.http.put(`http://159.65.5.18:3000/book/${book._id}`, book, { responseType: 'text' });
  }

  deleteBook(book: Book): Observable<string> {
    return this.http.delete(`http://159.65.5.18:3000/book/${book._id}`, { responseType: 'text' });
  }

}
