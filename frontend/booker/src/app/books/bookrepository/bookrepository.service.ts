import { Injectable } from '@angular/core';
import { Model, ModelFactory } from '@angular-extensions/model';
import { Observable } from 'rxjs';
import { IBook } from '../book.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

const initialData: IBook[] = [];


@Injectable({
  providedIn: 'root'
})
export class BookrepositoryService {
  private model: Model<IBook[]>;

  booksCache$: Observable<IBook[]>;

  book$: Observable<IBook>;

  constructor(private httpclient: HttpClient, private modelFactory: ModelFactory<IBook[]>) {
    this.model = this.modelFactory.create(initialData);
    this.booksCache$ = this.model.data$;
  }

  addBook(book: IBook) {
    this.httpclient.post<IBook>(environment.api, book).subscribe(booksDb => {

      const bookrepositorys = this.model.get();

      bookrepositorys.push(booksDb);

      this.model.set(bookrepositorys);
    });
  }

  updateBook(book: IBook) {
    this.httpclient.patch<IBook>(`${environment.api}${book._id}`, book).subscribe(bookDb => {
      let bookrepositorys = this.model.get();

      bookrepositorys = bookrepositorys.filter(b => b._id != bookDb._id);

      bookrepositorys.push(bookDb);

      this.model.set(bookrepositorys);
    });
  }

  getBooks(query?: string, operator?: string) {

    let params = {

    }

    if(query != null && query != undefined && query != "") {
      params["query"] = [query];
    }

    if(operator != null && operator != undefined && operator != "") {
      params["operator"] = [operator];
    }

    // let params = new HttpParams().set('query', query).set("operator", operator);

    this.httpclient.get<IBook[]>(environment.api, { params: params }).subscribe(booksDb => {

      const bookrepositorys = this.model.get();

      bookrepositorys.splice(0, bookrepositorys.length);

      bookrepositorys.push(...booksDb);

      this.model.set(bookrepositorys);
    });
  }

  getBook(id: string) {
    this.book$ = this.httpclient.get<IBook>(`${environment.api}${id}`);
  }
  deleteBook(id: string) {
    this.httpclient.delete<IBook>(`${environment.api}${id}`).subscribe((bookDb: IBook) => {

      const bookrepositorys = this.model.get();

      this.model.set(bookrepositorys.filter(bookCache => bookCache._id !== bookDb._id));

    });
  }
}

