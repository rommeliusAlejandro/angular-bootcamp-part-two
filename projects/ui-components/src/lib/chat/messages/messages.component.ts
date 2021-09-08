import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ChatMessage} from "../../model/chat/chat-message";

@Component({
  selector: 'lib-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  @Input()
  chatMessages!: ChatMessage[];



  constructor() { }

  ngOnInit(): void {
  }



}
