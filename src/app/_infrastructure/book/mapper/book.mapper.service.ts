import { Injectable } from '@angular/core';
import {BookDTO} from "../book.interface";
import {BookBo} from "../../../book/book.model";

@Injectable({
  providedIn: 'root'
})
export class BookMapperService {

  constructor() { }

  static toBo(bookDto:BookDTO): BookBo{
    return new BookBo(
      bookDto.id,
      bookDto.titre,
      bookDto.auteur,
      bookDto.description,
      bookDto.date
    )
  }

  static toBos(bookDtos:BookDTO[]): BookBo[]{
    let res: BookBo[] = [];
    bookDtos.forEach((bookDTO) => {
      res.push(this.toBo(bookDTO));
    });
    return res;
  }
}
