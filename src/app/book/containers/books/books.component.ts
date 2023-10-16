import {Component, OnInit} from '@angular/core';
import {PageComponent} from "../../../shared/containers/page/page.component";
import {BookBo} from "../../book.model";
import {BookService} from "../../service/book.service";
import {Observable, of} from "rxjs";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  host: {'class': 'flex flex-col'}
})
export class BooksComponent extends PageComponent implements OnInit{
  books$: Observable<BookBo[]> = of([]);
  inputFilter: FormControl<string | null> = new FormControl<string>('');
  view = 'list';

  constructor(
    private bookService:BookService
  ) {
    super();
  }

  ngOnInit() {
    this.books$ = this.bookService.books$;
  }

  selectView(view: string) {
    this.view = view;
  }
}
