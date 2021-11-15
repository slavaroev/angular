import { Component } from '@angular/core';

export interface Post {
  title: string,
  text: string,
  id: number,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';

  public posts: Post[] = [
    { title: 'Title for post 1', text: 'Text for post 1', id: 1 },
    { title: 'Title for post 2', text: 'Text for post 2', id: 2 },
  ];

  addPost(post: Post) {
    this.posts.unshift(post);
  }
}
