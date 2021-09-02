import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ComponentAComponent} from "./component-a/component-a.component";
import {HomeComponent} from "./home/home.component";
import {CanActivateGuardGuard} from "./guards/can-activate-guard.guard";
import {DashboardComponent} from "./administration/dashboard/dashboard.component";
import {RolesComponent} from "./administration/roles/roles.component";
import {IsAdministratorChildGuard} from "./guards/is-administrator-child.guard";
import {CanDeactivateSampleGuard} from "./guards/can-deactivate-sample.guard";
import {NotFoundComponentComponent} from "./not-found-component/not-found-component.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'componentA', component: ComponentAComponent},
  {path: 'componentA/:routeParam', component: ComponentAComponent},
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
  },
  {
    path: 'lazy',
    loadChildren: () => import('./lazy-loaded/lazy-loaded.module').then(m => m.LazyLoadedModule)
  },
  {path: '**', component: NotFoundComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
