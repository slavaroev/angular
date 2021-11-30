import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Params,
  Router
} from "@angular/router";
import { PostsService } from "../posts.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  public showIds = false;

  constructor(
    public postsService: PostsService,
    public activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.showIds = !!params['showIds'];
    });
    this.activatedRoute.fragment.subscribe((fragment) => {
      console.log(fragment);
    });
  }

  showIdsProgram() {
    this.router.navigate(['/posts'], {
      queryParams: {showIds: true},
      fragment: 'fragmentProgram'
    });
  }
}
