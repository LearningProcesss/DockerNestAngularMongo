import { Component, OnInit, OnDestroy } from '@angular/core';
import { BooksService } from '../books.service';
import { IBook } from '../book.interface';
import { Observable, Subscription } from 'rxjs';
import { trigger, transition, style, animate } from '@angular/animations';
import { BookrepositoryService } from '../bookrepository/bookrepository.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit, OnDestroy {

  // booksReturn: Observable<Book[]>;

  constructor(public bookService: BookrepositoryService) { }

  ngOnInit() {
    this.bookService.getBooks();
  }

  ngOnDestroy(): void {

  }


}
