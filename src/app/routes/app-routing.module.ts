import { NgModule } from "@angular/core";
import {
  RouterModule,
  Routes
} from "@angular/router";
import { AboutExtraComponent } from "./about-extra/about-extra.component";
import { AboutComponent } from "./about/about.component";
import { AuthGuard } from "./auth.guard";
import { ErrorComponent } from "./error/error.component";
import { HomeComponent } from "./home/home.component";
import { PostResolver } from "./post.resolver";
import { PostComponent } from "./post/post.component";
import { PostsComponent } from "./posts/posts.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts', component: PostsComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent, canActivateChild: [AuthGuard], children: [
      { path: 'extra', component: AboutExtraComponent }
    ] },
  {
    path: 'posts/:id',
    component: PostComponent,
    resolve: {
      post: PostResolver
    }
  },
  { path: 'error', component: ErrorComponent},
  { path: '**', redirectTo: '/error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
