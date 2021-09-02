import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadedRoutingModule } from './lazy-loaded-routing.module';
import { LazyAComponent } from './lazy-a/lazy-a.component';
import { LazyBComponent } from './lazy-b/lazy-b.component';
import { LazyCComponent } from './lazy-c/lazy-c.component';
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    LazyAComponent,
    LazyBComponent,
    LazyCComponent
  ],
  imports: [
    CommonModule,
    LazyLoadedRoutingModule,
    MatButtonModule
  ]
})
export class LazyLoadedModule { }
