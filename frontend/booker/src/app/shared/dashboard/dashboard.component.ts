import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/books/books.service';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Book } from 'src/app/books/book.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  booksCount: Observable<number>;

  constructor(private bookService: BooksService) { }

  ngOnInit() {
    this.booksCount = this.bookService.getBooks().pipe(
      map(books => { return books.length })
    );
  }

}
