import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule
} from "@angular/forms";
import { FormsComponent } from './forms/forms.component';
import { SwitchComponent } from './switch/switch.component';



@NgModule({
  declarations: [
    FormsComponent,
    SwitchComponent
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
