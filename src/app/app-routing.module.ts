import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ComponentAComponent} from "./component-a/component-a.component";
import {HomeComponent} from "./home/home.component";
import {CanActivateGuardGuard} from "./guards/can-activate-guard.guard";
import {DashboardComponent} from "./administration/dashboard/dashboard.component";
import {RolesComponent} from "./administration/roles/roles.component";
import {IsAdministratorChildGuard} from "./guards/is-administrator-child.guard";
import {CanDeactivateSampleGuard} from "./guards/can-deactivate-sample.guard";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'componentA', component: ComponentAComponent},
  {
    path: 'administration',
    component: DashboardComponent,
    canActivate: [CanActivateGuardGuard],
    canDeactivate: [CanDeactivateSampleGuard],
    children: [
      {
        path: '',
        canActivateChild: [IsAdministratorChildGuard],
        children: [
          {
            path: 'roles', component: RolesComponent
          }
        ]
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
