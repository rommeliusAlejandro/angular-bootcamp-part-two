import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ChatMessage} from "../../model/chat/chat-message";

@Component({
  selector: 'lib-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.css']
})
export class ChatContainerComponent implements OnInit {

  @Input()
  chatMessages!: ChatMessage[];

  @Output()
  eventChatContainer: EventEmitter<ChatMessage> = new EventEmitter<ChatMessage>();

  constructor() { }

  ngOnInit(): void {
  }

  handleNewMessage(body: ChatMessage) {
    this.eventChatContainer.emit(body);
  }

}
