import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule
} from "@angular/forms";
import { FormsComponent } from './forms/forms.component';



@NgModule({
  declarations: [
    FormsComponent
  ],
  exports: [
    FormsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AppFormsModule { }
