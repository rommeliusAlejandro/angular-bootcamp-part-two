import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BaseNews} from "../news/base-news";

@Component({
  selector: 'app-organization-news',
  templateUrl: './organization-news.component.html',
  styleUrls: ['./organization-news.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrganizationNewsComponent implements OnInit, BaseNews<string> {

  type = 'Organization';

  @Input()
  pageSize: number = 0;

  @Output()
  eventEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  emmitEvent(): void {
    this.eventEmitter.emit(`This is an event from ${OrganizationNewsComponent.name}`);
  }

}
