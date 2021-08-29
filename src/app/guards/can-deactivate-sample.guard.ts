import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import {Observable, of} from 'rxjs';
import {DashboardComponent} from "../administration/dashboard/dashboard.component";

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean>;
}

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateSampleGuard implements CanDeactivate<DashboardComponent> {

  canDeactivate(component: DashboardComponent): boolean {

    return  window.confirm(`Are you sure?`);
  }

}
