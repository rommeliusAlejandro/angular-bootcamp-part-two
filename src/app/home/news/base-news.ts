import {EventEmitter} from "@angular/core";

export interface BaseNews<ET> {
  type: string;
  pageSize: number;
  eventEmitter: EventEmitter<ET>;
}
