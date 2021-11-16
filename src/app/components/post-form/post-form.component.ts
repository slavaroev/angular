import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild
} from "@angular/core";
import { Post } from "../../app.component";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  public title: string = '';
  public text: string = '';
  @Output() addPost: EventEmitter<Post> = new EventEmitter<Post>();
  // if we need call ViewChild ( inputRef ) in ngOnInit, we need set { static: true }
  @ViewChild('inputRef', {static: false}) inputRef?: ElementRef;

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

  inputFocus(): void {
    this.inputRef?.nativeElement.focus();
  }
}
