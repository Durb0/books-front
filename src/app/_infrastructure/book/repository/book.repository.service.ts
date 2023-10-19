import { Injectable } from '@angular/core';
import {map, Observable, of} from "rxjs";
import {BookBo} from "../../../book/book.model";
import {BookDTO} from "../book.interface";
import {HttpClient} from "@angular/common/http";
import {BookMapperService} from "../mapper/book.mapper.service";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BookRepositoryService {

  private baseUrl = "/api";

  constructor(
    private http: HttpClient
  ) { }

  get books$(): Observable<BookBo[]>{
      return this.http.get<BookDTO[]>(environment.apiUrl + this.baseUrl + '/livres').pipe(
        map((bookDTOs: BookDTO[]) => bookDTOs.map((bookDTO: BookDTO) => BookMapperService.toBo(bookDTO))
      ));
  }
}
