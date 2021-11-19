import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    ServicesComponent,
    CounterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ServicesComponent
  ]
})
export class ServicesModule { }
