import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { BookrepositoryService } from '../books/bookrepository/bookrepository.service';

@Component({
  selector: 'app-booksfilter',
  templateUrl: './booksfilter.component.html',
  styleUrls: ['./booksfilter.component.css']
})
export class BooksfilterComponent implements OnInit {

  queryField: FormControl = new FormControl();
  constructor(private bookService: BookrepositoryService) { }

  ngOnInit() {
    this.queryField.valueChanges.pipe(
      debounceTime(500)
    ).subscribe(query => {
      console.log(query);
      this.bookService.getBooks(query != "" ? `titolo~${query},autore~${query}` : "", query != "" ? "or": "");
    });
  }

}
