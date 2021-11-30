import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from "./app-routing.module";
import { MainComponent } from './main.component';
import { AboutComponent } from './about/about.component';
import { AboutExtraComponent } from './about-extra/about-extra.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [
    MainComponent,
    AboutComponent,
    AboutExtraComponent,
    PostComponent,
    PostsComponent,
    HomeComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    MainComponent
  ]
})
export class RoutesModule { }
