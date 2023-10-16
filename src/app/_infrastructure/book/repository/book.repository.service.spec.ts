import { TestBed } from '@angular/core/testing';

import { BookRepositoryService } from './book.repository.service';

describe('BookRepositoryService', () => {
  let service: BookRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
