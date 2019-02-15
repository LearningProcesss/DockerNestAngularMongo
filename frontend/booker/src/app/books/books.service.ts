import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IBook } from './book.interface';

import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  booksRepository$: Observable<IBook[]>;
  currentBook$: Observable<IBook>;


  constructor(private httpclient: HttpClient) { }

  /**
   * name
   */
  public getBooks() {
    this.booksRepository$ = this.httpclient.get<IBook[]>(environment.api);
  }

  public getBook(id: string) {
    this.currentBook$ = this.httpclient.get<IBook>(`${environment.api}${id}`);
  }

  public deleteBook(id: string) {
    // this.httpclient.delete<Book>(`${environment.api}${id}`).subscribe((book: Book) => {
    //   this.booksRepository$.pipe(map(booksCache => booksCache.slice(0, booksCache.findIndex(bookCache => bookCache._id == book._id))));
    // }, error => {

    // });
  }
}
