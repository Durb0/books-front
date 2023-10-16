import {Component, Input} from '@angular/core';
import {BookBo} from "../../book.model";

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
  host: {'class': 'card bg-base-100 shadow-xl'}
})
export class BookCardComponent {
  @Input() book!: BookBo;
  image: string = "/assets/image-"+ Math.floor(Math.random() * 6 + 1) +".png"
}
