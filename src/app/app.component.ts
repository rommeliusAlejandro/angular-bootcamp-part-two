import { Component } from '@angular/core';
import {ChatMessage} from "../../projects/ui-components/src/lib/model/chat/chat-message";
import {MenuItem} from '@dh-rall/ui-elements';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-bootcamp-part-two';

  chatMessages: ChatMessage[] = [];

  menuItems: MenuItem[] = [
    {
      path: '/path1', label: 'Path1'
    }
  ]

  constructor() {
    this.chatMessages = [
      {
        id: '1',
        recipient: 'A',
        sender: 'B',
        body: 'Hola!'
      },
      {
        id: '2',
        recipient: 'B',
        sender: 'C',
        body: 'Como estas!'
      },
      {
        id: '3',
        recipient: 'B',
        sender: 'C',
        body: 'Todo bien?!'
      }
    ];
  }

  handleMessages(chatMessage: ChatMessage) {
    this.chatMessages.push(chatMessage);
  }

  handleActive(label: string) {
    alert(label);
  }
}
