import { Component, OnInit, OnDestroy } from '@angular/core';
import { BooksService } from '../books.service';
import { Book } from '../book.interface';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit, OnDestroy {

  booksReturn: Observable<Book[]>;
  onBookDelete: Subscription;

  subscription: Subscription;

  constructor(private bookService: BooksService) { }

  ngOnInit() {
    //  this.subscription = this.bookService.booksRepository.subscribe((data: Book[]) => {

    //   });
    this.booksReturn = this.bookService.getBooks();

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
