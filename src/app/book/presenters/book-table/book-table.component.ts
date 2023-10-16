import {Component, Input} from '@angular/core';
import {BookBo} from "../../book.model";

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.scss'],
})
export class BookTableComponent{
  @Input() books: BookBo[] = [];

}
