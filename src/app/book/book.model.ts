export class BookBo{
  id: number;
  title: string;
  author: string;
  description: string;
  date: number;

  constructor(id:number, title: string, author: string, description: string, date: number){
    this.id = id
    this.title = title;
    this.author = author;
    this.description = description;
    this.date = date;
  }
}
