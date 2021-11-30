import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from "@angular/router";
import {
  delay,
  Observable,
  of
} from "rxjs";
import {
  Post,
  PostsService
} from "./posts.service";

@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<Post>{

  constructor(private postService: PostsService) {
  }

  // @ts-ignore
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Post> | Promise<Post> | Post | undefined {
    return of(this.postService.getPostById(+route.params['id']))
      // @ts-ignore
      .pipe(delay(1500));
  }
}
