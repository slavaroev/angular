import { Injectable } from '@angular/core';

export interface Post {
  title: string,
  text: string,
  id: number,
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts: Post[] = [
    { title: 'Title for first post', text: 'Text for first post', id: 1 },
    { title: 'Title for second post', text: 'Text for second post', id: 2 },
    { title: 'Title for third post', text: 'Text for third post', id: 3 },
    { title: 'Title for fourth post', text: 'Text for fourth post', id: 4 },
  ];

  getPostById(id: number): Post | undefined {
    return this.posts.find(post => post.id === id);
  }
}
