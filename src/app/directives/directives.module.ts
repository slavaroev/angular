import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './directives.component';
import { StyleDirective } from "./directives/style.directive";
import { IfNotDirective } from './directives/if-not.directive';



@NgModule({
  declarations: [
    DirectivesComponent,
    StyleDirective,
    IfNotDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DirectivesComponent
  ]
})
export class DirectivesModule { }
