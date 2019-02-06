import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book.interface';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-booklistitem',
  templateUrl: './booklistitem.component.html',
  styleUrls: ['./booklistitem.component.css']
})
export class BooklistitemComponent implements OnInit {

  @Input() book: Book;

  constructor(private bookService: BooksService) { }

  ngOnInit() {
  }

  onDeleteButton() {
    console.log(this.book._id);
    
    this.bookService.deleteBook(this.book._id);
  }

}
