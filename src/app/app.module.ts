import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentAComponent } from './component-a/component-a.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import { HomeComponent } from './home/home.component';
import {AdministrationModule} from "./administration/administration.module";

@NgModule({
  declarations: [
    AppComponent,
    ComponentAComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    AdministrationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
