import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BooklistComponent } from './books/booklist/booklist.component';
import { BooklistitemComponent } from './books/booklistitem/booklistitem.component';
import { BookvieweditComponent } from './books/bookviewedit/bookviewedit.component';
import { NavComponent } from './shared/nav/nav.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    BooklistComponent,
    BooklistitemComponent,
    BookvieweditComponent,
    // NavComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    // FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
