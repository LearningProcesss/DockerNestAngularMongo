import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IBook } from '../book.interface';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { BookrepositoryService } from '../bookrepository/bookrepository.service';
import { tap, delay, flatMap, take, mergeMap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-bookviewedit',
  templateUrl: './bookviewedit.component.html',
  styleUrls: ['./bookviewedit.component.css']
})
export class BookvieweditComponent implements OnInit {

  bookFormGroup: FormGroup;
  visualizzaForm: boolean = false;
  edit: boolean;
  testoBtn: string;
  id: string = "";

  constructor(private bookService: BookrepositoryService, private route: ActivatedRoute, private formBuilder: FormBuilder) {

  }

  ngOnInit() {

    this.edit = this.route.snapshot.data["edit"];

    // this.bookFormGroup = this.formBuilder.group({});

    // console.log(this.route.snapshot); //ricavare se /view/id o se /edit/id
    // console.log(this.route.snapshot.data, this.route.snapshot.params);

    this.route.params.subscribe((params: Params) => {
      if (params['id']) {

        this.id = params['id'];

        this.bookService.getBook(this.route.snapshot.params["id"]);

        this.bookService.book$.subscribe((book: IBook) => {

          this.createFormWithModel(book);

        });

        this.testoBtn = "Modifica";

      } else {

        this.testoBtn = "Salva";

        this.createFormWithModel(null);

      }
    }, error => { console.log(error); },
      () => console.log("COMPLETED!")
    );

    // if (this.route.snapshot.paramMap.has("id")) {
    //   this.bookService.getBook(this.route.snapshot.params["id"]);
    //   this.bookService.book$.subscribe((book: IBook) => {
    //     console.log(book);

    //     this.createFormWithModel(book);
    //   });
    //   this.testoBtn = "Modifica";
    // } else {
    //   this.testoBtn = "Salva";
    //   this.createFormWithModel(null);
    // }
  }

  createFormWithModel(book: IBook) {
    if (book !== null) {
      this.bookFormGroup = this.formBuilder.group({
        _id: [{ value: book._id, disabled: !this.edit }],
        titolo: [{ value: book.titolo, disabled: !this.edit }],
        autore: [{ value: book.autore, disabled: !this.edit }],
        costo: [{ value: book.costo, disabled: !this.edit }]
      });
    } else {
      this.bookFormGroup = this.formBuilder.group({
        titolo: [{ value: '', disabled: !this.edit }],
        autore: [{ value: '', disabled: !this.edit }],
        costo: [{ value: '', disabled: !this.edit }]
      });
    }

    // this.bookFormGroup = this.formBuilder.group(book);

    this.visualizzaForm = !this.visualizzaForm;

  }

  save() {

    const book: IBook = this.bookFormGroup.value;

    if (this.id == "") {
      this.bookService.addBook(book);
    } else {
      console.log(this.id, book);

      this.bookService.updateBook(book);
    }
    this.bookFormGroup.reset();
  }



}
