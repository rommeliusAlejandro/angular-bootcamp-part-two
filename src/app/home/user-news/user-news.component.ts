import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BaseNews} from "../news/base-news";

@Component({
  selector: 'app-user-news',
  templateUrl: './user-news.component.html',
  styleUrls: ['./user-news.component.css']
})
export class UserNewsComponent implements OnInit, BaseNews<number> {

  type = 'User';

  @Input()
  pageSize: number = 0;

  @Output()
  eventEmitter: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  triggerEvent(): void {
    this.eventEmitter.emit(1945);
  }

}
