import {Component, Input} from '@angular/core';
import {BookBo} from "../../book.model";

@Component({
  selector: 'app-book-grid',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-grid.component.scss'],
  host: {'class': 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-5 rounded'}
})
export class BookGridComponent {
  @Input() books: BookBo[] = [];

}
