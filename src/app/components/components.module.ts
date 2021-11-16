import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ComponentsComponent } from "./components.component";
import { PostFormComponent } from "./post-form/post-form.component";
import { PostComponent } from "./post/post.component";



@NgModule({
  declarations: [
    ComponentsComponent,
    PostFormComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ComponentsComponent,
    PostFormComponent,
    PostComponent
  ]
})
export class ComponentsModule { }
