import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Book } from '../book.interface';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-bookviewedit',
  templateUrl: './bookviewedit.component.html',
  styleUrls: ['./bookviewedit.component.css']
})
export class BookvieweditComponent implements OnInit {

  public bookFormGroup: FormGroup;
  visualizzaForm: boolean = false;
  edit: boolean;

  constructor(private bookService: BooksService, private route: ActivatedRoute, private formBuilder: FormBuilder) {

  }

  ngOnInit() {

    this.edit = this.route.snapshot.data["edit"];

    console.log(this.route.snapshot); //ricavare se /view/id o se /edit/id
    console.log(this.route.snapshot.data, this.route.snapshot.params);

    this.bookService.getBook(this.route.snapshot.params["id"]).subscribe((book: Book) => {
      this.createFormWithModel(book);
    }, error => {
      console.log("ERROR " + error);
    });

    this.route.paramMap.subscribe((prm: ParamMap) => {
      if (prm.has('id')) {
        //EDIT MODE


      } else {
        //CREATE MODE

      }
    });
  }

  createFormWithModel(book: Book) {
    // this.bookFormGroup = this.formBuilder.group({
    //   titolo: [book.titolo],
    //   autore: [book.autore],
    //   costo: [book.costo]
    // });
    this.bookFormGroup = this.formBuilder.group(book);
    this.visualizzaForm = !this.visualizzaForm;
  }



}
