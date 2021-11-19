import { Component, OnInit } from '@angular/core';

export interface News {
  title: string,
  text: string,
  id: number,
}

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  public search = '';
  public searchField = 'title';

  news: News[] = [
    { title: 'sssssssssss', text: 'ssssssssssss', id: 1 },
    { title: 'aaaaaaaaaaa', text: '22222222222222', id: 2 },
    { title: 'zzzzzzzzzzz', text: 'qqqqqqqqq', id: 3 },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addNews() {
    this.news.unshift({title: 'ttttttt', text: 'yyyyyyyyy', id: 4});
  }
}
