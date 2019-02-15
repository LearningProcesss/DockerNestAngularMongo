import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/books/books.service';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { IBook } from 'src/app/books/book.interface';
import { BookrepositoryService } from 'src/app/books/bookrepository/bookrepository.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  booksCount: Observable<number>;

  constructor(private bookService: BookrepositoryService) { }

  ngOnInit() {

    this.bookService.getBooks();

    this.booksCount = this.bookService.booksCache$.pipe(
      map(books => { return books.length })
    );
  }

}
