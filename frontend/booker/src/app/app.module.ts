import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { BooklistComponent } from './books/booklist/booklist.component';
import { BooklistitemComponent } from './books/booklistitem/booklistitem.component';
import { BookvieweditComponent } from './books/bookviewedit/bookviewedit.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { BooksfilterComponent } from './booksfilter/booksfilter.component';



@NgModule({
  declarations: [
    AppComponent,
    BooklistComponent,
    BooklistitemComponent,
    BookvieweditComponent,
    DashboardComponent,
    BooksfilterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
