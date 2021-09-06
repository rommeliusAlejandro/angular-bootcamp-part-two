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
import {MatMenuModule} from "@angular/material/menu";
import {MatCardModule} from "@angular/material/card";
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import {MatIconModule} from "@angular/material/icon";
import { NewsComponent } from './home/news/news.component';
import { SystemNewsComponent } from './home/system-news/system-news.component';
import { OrganizationNewsComponent } from './home/organization-news/organization-news.component';
import { UserNewsComponent } from './home/user-news/user-news.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentAComponent,
    HomeComponent,
    NotFoundComponentComponent,
    NewsComponent,
    SystemNewsComponent,
    OrganizationNewsComponent,
    UserNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    AdministrationModule,
    MatMenuModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
