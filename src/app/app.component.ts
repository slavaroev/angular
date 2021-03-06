import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from "@angular/core";

export interface Post {
  title: string,
  text: string,
  id: number,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'angular';

  public posts: Post[] = [
    { title: 'Title for post 1', text: 'Text for post 1', id: 1 },
    { title: 'Title for post 2', text: 'Text for post 2', id: 2 },
  ];

  ngOnInit() {
    setTimeout(() => {
      //this.posts[0].title = 'changed';
      this.posts[0] = {
        title: 'Changed',
        text: 'Changed',
        id: 4
      };
    }, 1000);
  }

  addPost(post: Post) {
    this.posts.unshift(post);
  }
}
