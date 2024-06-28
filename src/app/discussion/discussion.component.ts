import { Component,OnDestroy,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { io } from 'socket.io-client';
import { UserService } from '../user.service';
@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrl: './discussion.component.css'
})
export class DiscussionComponent implements OnInit,OnDestroy {
  topic: string="";
  username: string =""; // Assign dynamically based on login
  messages: { username: string, message: string, timestamp: Date }[] = [];
  newMessage: string = '';
  socket: any;

  constructor(private route: ActivatedRoute,private userService:UserService) {}

  ngOnInit(): void {
    this.topic = this.route.snapshot.paramMap.get('topic') || 'General';
    this.username = this.userService.getUsername();
    this.socket = io('http://localhost:3030');
    this.socket.on('connect', () => {
      console.log('Connected to server');
    });

    this.socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });
    this.socket.emit('joinTopic', this.topic);

    this.socket.on('loadMessages', (loadedMessages: any) => {
      this.messages = loadedMessages;
    });

    this.socket.on('message', (message: any) => {
      if (message.topic === this.topic) {
        this.messages.push(message);
      }
    });
  }

  sendMessage(): void {
    if (this.newMessage.trim()) {
      const messageData = {
        username: this.username,
        message: this.newMessage,
        topic: this.topic,
        timestamp: new Date()
      };
      this.socket.emit('sendMessage', messageData);
      this.newMessage = '';
    }
  }

  ngOnDestroy(): void {
    this.socket.disconnect();
  }
}
