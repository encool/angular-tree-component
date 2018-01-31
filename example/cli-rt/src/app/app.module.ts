import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TreeModule } from "../../../../lib/angular-tree-component";

import { App } from './app.component';


@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    TreeModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
