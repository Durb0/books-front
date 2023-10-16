import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookTableComponent } from './presenters/book-table/book-table.component';
import { BooksComponent } from './containers/books/books.component';
import {SharedModule} from "../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";
import { FilterBooksByPipe } from './pipes/filter-books-by.pipe';
import { BookGridComponent } from './presenters/book-grid/book-grid.component';
import { BookCardComponent } from './presenters/book-card/book-card.component';



@NgModule({
  declarations: [
    BookTableComponent,
    BooksComponent,
    FilterBooksByPipe,
    BookGridComponent,
    BookCardComponent
  ],
  exports: [
    BooksComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class BookModule { }
