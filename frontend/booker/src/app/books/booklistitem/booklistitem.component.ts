import { Component, OnInit, Input } from '@angular/core';
import { IBook } from '../book.interface';
import { BooksService } from '../books.service';
import { BookrepositoryService } from '../bookrepository/bookrepository.service';

@Component({
  selector: 'app-booklistitem',
  templateUrl: './booklistitem.component.html',
  styleUrls: ['./booklistitem.component.css']
})
export class BooklistitemComponent implements OnInit {

  @Input() book: IBook;

  constructor(private bookService: BookrepositoryService) { }

  ngOnInit() {
  }

  onDeleteButton() {
    console.log(this.book._id);
    
    // this.bookService.deleteBook(this.book.id);
  }

}
