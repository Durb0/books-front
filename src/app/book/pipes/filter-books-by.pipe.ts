import { Pipe, PipeTransform } from '@angular/core';
import {BookBo} from "../book.model";

@Pipe({
  name: 'filterBooksBy'
})
export class FilterBooksByPipe implements PipeTransform {

  transform(value: BookBo[], filter: string): BookBo[] {
    return value.filter((book) => book.title.toLowerCase().includes(filter.toLowerCase()));
  }

}
