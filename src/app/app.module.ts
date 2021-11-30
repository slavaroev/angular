import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentsModule } from "./components/components.module";
import { DirectivesModule } from "./directives/directives.module";
import { AppFormsModule } from "./forms/app-forms.module";
import { RoutesModule } from "./routes/routes.module";
import { ServicesModule } from "./services/services.module";
import { PipesModule } from "./pipes/pipes.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ComponentsModule,
    DirectivesModule,
    ServicesModule,
    PipesModule,
    AppFormsModule,
    RoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
