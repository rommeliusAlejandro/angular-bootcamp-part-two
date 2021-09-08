import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ChatMessage} from "../../model/chat/chat-message";

@Component({
  selector: 'lib-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css']
})
export class InputBoxComponent implements OnInit {

  body!: string;

  @Output()
  eventEmmiter: EventEmitter<ChatMessage> = new EventEmitter<ChatMessage>();

  constructor() { }

  ngOnInit(): void {
  }

  newMessage() {
    this.eventEmmiter.emit({
      id: `12`,
      recipient: 'a',
      sender: 'b',
      body: this.body
    });
  }

}
