import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Params,
  Router
} from "@angular/router";
import {
  Post,
  PostsService
} from "../posts.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post!: Post | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    // public postsService: PostsService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.activatedRoute.data.subscribe(data => {
      this.post = data['post'];
    });

    // snapshot - статический объект, в котором не отражаются изменения
    //this.post = this.activatedRoute.snapshot.data['post'];

    // this.activatedRoute.params.subscribe((params: Params) => {
    //   console.log(params);
    //   this.post = this.postsService.getPostById(+params['id']);
    // });
  }

  goToPostFour(): void {
    this.router.navigate(['/posts', 4]);
  }
}
