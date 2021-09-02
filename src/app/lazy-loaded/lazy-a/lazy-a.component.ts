import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-lazy-a',
  templateUrl: './lazy-a.component.html',
  styleUrls: ['./lazy-a.component.css']
})
export class LazyAComponent implements OnInit {

  constructor(private readonly route: Router) { }

  ngOnInit(): void {
  }

  goToComponentA() {
    this.route.navigate(['/componentA']);
  }

  goToComponentAPassingParams() {
    const pathParam = prompt('Give me the route param value');
    const queryParam = prompt('Give me the query param one value');

    this.route.navigate(['/componentA', pathParam, {paramOne: queryParam}])
  }

}
