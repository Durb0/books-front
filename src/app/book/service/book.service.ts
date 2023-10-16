import { Injectable } from '@angular/core';
import {BookBo} from "../book.model";
import {Observable, of} from "rxjs";
import {BookRepositoryService} from "../../_infrastructure/book/repository/book.repository.service";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(
    private bookRepository: BookRepositoryService
  ) { }

  get books$(): Observable<BookBo[]>{
    return this.bookRepository.books$;
  }
}
