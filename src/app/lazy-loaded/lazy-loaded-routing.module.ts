import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LazyAComponent} from "./lazy-a/lazy-a.component";
import {LazyBComponent} from "./lazy-b/lazy-b.component";
import {LazyCComponent} from "./lazy-c/lazy-c.component";

const routes: Routes = [
  {
    path: 'lazyA', component: LazyAComponent
  },
  {
    path: 'lazyB', component: LazyBComponent
  },
  {
    path: 'lazyC', component: LazyCComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadedRoutingModule { }
