import {
  Component,
  EventEmitter,
  OnInit,
  Output
} from "@angular/core";
import { Post } from "../app.component";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  public title: string = '';
  public text: string = '';
  @Output() addPost: EventEmitter<Post> = new EventEmitter<Post>();

  constructor() { }

  ngOnInit(): void {
  }

  sendPost(): void {
    if (this.title.trim() && this.text.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text,
        id: 3
      };
      this.addPost.emit(post);
    }
  }
}
