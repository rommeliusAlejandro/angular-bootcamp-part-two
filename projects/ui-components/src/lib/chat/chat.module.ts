import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages/messages.component';
import { InputBoxComponent } from './input-box/input-box.component';
import { ChatContainerComponent } from './chat-container/chat-container.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    MessagesComponent,
    InputBoxComponent,
    ChatContainerComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ChatContainerComponent
  ]
})
export class ChatModule { }
