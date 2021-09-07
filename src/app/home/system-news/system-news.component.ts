import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation
} from '@angular/core';
import {BaseNews} from "../news/base-news";

@Component({
  selector: 'app-system-news',
  templateUrl: './system-news.component.html',
  styleUrls: ['./system-news.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SystemNewsComponent implements OnInit, BaseNews<boolean> {

  type = 'System';

  @Input()
  pageSize: number = 0;

  @Output()
  eventEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  newEvent() {
    this.eventEmitter.emit(true);
  }

}
