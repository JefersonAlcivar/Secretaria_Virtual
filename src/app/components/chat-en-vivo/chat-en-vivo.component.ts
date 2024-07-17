import { Component } from '@angular/core';

interface Message {
  content: string;
  sender: string;
}

@Component({
  selector: 'app-chat-en-vivo',
  templateUrl: './chat-en-vivo.component.html',
  styleUrls: ['./chat-en-vivo.component.css']
})
export class ChatEnVivoComponent {
  messages: Message[] = [];
  messageContent: string = '';
  username: string = 'Usuario'; // Cambia esto según tus necesidades

  sendMessage() {
    if (this.messageContent.trim()) {
      this.messages.push({ content: this.messageContent, sender: this.username });
      this.messageContent = '';
    }
  }
}