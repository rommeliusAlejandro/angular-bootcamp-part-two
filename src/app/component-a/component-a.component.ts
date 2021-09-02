import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css']
})
export class ComponentAComponent implements OnInit {

  routeParam: string | null = null;

  queryParam: any = null;

  constructor(
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.routeParam = this.route.snapshot.paramMap.get('routeParam');
    this.queryParam = {
      paramOne : this.route.snapshot.paramMap.get('paramOne'),
      paramTwo : this.route.snapshot.paramMap.get('paramTwo')
    };

  }

}
