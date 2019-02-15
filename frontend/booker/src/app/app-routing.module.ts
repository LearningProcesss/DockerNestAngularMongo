import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { BooklistComponent } from './books/booklist/booklist.component';
import { BookvieweditComponent } from './books/bookviewedit/bookviewedit.component';

// const routes: Routes = [
//   { path: "", component: DashboardComponent },
//   { path: "books", component: BooklistComponent },
//   { path: "books/create", component: BookvieweditComponent },
//   { path: "books/edit/:id", component: BookvieweditComponent, data: { "edit": true } },
//   { path: "books/view/:id", component: BookvieweditComponent, data: { "edit": false } }
// ];
const routes: Routes = [
  { path: "", component: DashboardComponent },
  {
    path: "books", component: BooklistComponent, children: [
      { path: "new", component: BookvieweditComponent, data: { "edit": true } },
      { path: "edit/:id", component: BookvieweditComponent, data: { "edit": true } },
      { path: "view/:id", component: BookvieweditComponent, data: { "edit": false } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
