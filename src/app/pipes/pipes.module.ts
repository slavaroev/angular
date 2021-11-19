import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { PipesComponent } from './pipes.component';
import { MultByPipe } from "./pipes/mult-by.pipe";
import { ExMarksPipe } from './pipes/ex-marks.pipe';
import { NewsFilterPipe } from './pipes/news-filter.pipe';



@NgModule({
  declarations: [
    PipesComponent,
    MultByPipe,
    ExMarksPipe,
    NewsFilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PipesComponent
  ]
})
export class PipesModule { }
