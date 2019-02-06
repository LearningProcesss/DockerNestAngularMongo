import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Book } from './book.interface';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  // @Output() delete: EventEmitter<Book> = new EventEmitter();

  booksRepository: Observable<Book[]>;


  constructor(private httpclient: HttpClient) { }

  /**
   * name
   */
  public getBooks() {
    return this.httpclient.get<Book[]>(environment.api);
  }

  public getBook(id: string) {
    return this.httpclient.get<Book>(environment.api + id);
  }

  public deleteBook(id: string) {
    this.httpclient.delete<Book>(environment.api + id).subscribe((book: Book) => {
      // this.delete.emit(book);
    }, error => {

    });
  }
}
