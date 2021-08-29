import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RolesComponent } from './roles/roles.component';
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    DashboardComponent,
    RolesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule
  ]
})
export class AdministrationModule { }
