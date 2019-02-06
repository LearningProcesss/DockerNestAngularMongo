import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Book } from '../book.interface';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  booksReturn: Observable<Book[]>;
  onBookDelete: Subscription;

  constructor(private bookService: BooksService) { }

  ngOnInit() {
    this.booksReturn = this.bookService.getBooks();
    this.bookService.delete.subscribe((b: Book) => {
      console.log("Eliminato: " + b);

    });
  }

}
