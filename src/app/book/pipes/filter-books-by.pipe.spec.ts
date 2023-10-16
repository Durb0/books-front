import { FilterBooksByPipe } from './filter-books-by.pipe';

describe('FilterBooksByPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterBooksByPipe();
    expect(pipe).toBeTruthy();
  });
});
