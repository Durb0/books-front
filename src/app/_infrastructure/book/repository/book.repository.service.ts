import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {BookBo} from "../../../book/book.model";
import {BookDTO} from "../book.interface";
import {HttpClient} from "@angular/common/http";
import {BookMapperService} from "../mapper/book.mapper.service";

@Injectable({
  providedIn: 'root'
})
export class BookRepositoryService {

  private baseUrl = "/api";

  private booksDtos: BookDTO[] = [
    {
      id: 0,
      titre: "Harry Potter",
      auteur: "J.K Rowling",
      description: "un livre de sorciers",
      date: 1997,
    },
    {
      id: 1,
      titre: "Blade Runner",
      auteur: "osef",
      description: "un livre dans le futur",
      date: 1968
    },
    {
      id: 0,
      titre: "Harry Potter",
      auteur: "J.K Rowling",
      description: "un livre de sorciers",
      date: 1997,
    },
    {
      id: 1,
      titre: "Blade Runner",
      auteur: "osef",
      description: "un livre dans le futur",
      date: 1968
    },
    {
      id: 0,
      titre: "Harry Potter",
      auteur: "J.K Rowling",
      description: "un livre de sorciers",
      date: 1997,
    },
    {
      id: 1,
      titre: "Blade Runner",
      auteur: "osef",
      description: "un livre dans le futur",
      date: 1968
    },
    {
      id: 0,
      titre: "Harry Potter",
      auteur: "J.K Rowling",
      description: "un livre de sorciers",
      date: 1997,
    },
    {
      id: 1,
      titre: "Blade Runner",
      auteur: "osef",
      description: "un livre dans le futur",
      date: 1968
    },
    {
      id: 0,
      titre: "Harry Potter",
      auteur: "J.K Rowling",
      description: "un livre de sorciers",
      date: 1997,
    },
    {
      id: 1,
      titre: "Blade Runner",
      auteur: "osef",
      description: "un livre dans le futur",
      date: 1968
    },
    {
      id: 0,
      titre: "Harry Potter",
      auteur: "J.K Rowling",
      description: "un livre de sorciers",
      date: 1997,
    },
    {
      id: 1,
      titre: "Blade Runner",
      auteur: "osef",
      description: "un livre dans le futur",
      date: 1968
    },
  ]

  constructor(
    private http: HttpClient
  ) { }

  get books$(): Observable<BookBo[]>{
      let bookDTOs: BookDTO[] = this.booksDtos;
      return of(BookMapperService.toBos(bookDTOs))
  }
}
