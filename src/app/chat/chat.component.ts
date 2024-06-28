import { Component } from '@angular/core';
import { GeminiService } from '../gemini.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  userInput: string = '';
  messages: { text: string, sender: 'user' | 'bot' }[] = [];
  errorMessage: string = '';

  constructor(private geminiService: GeminiService) {}

  generateText() {
    const userMessage: { text: string, sender: 'user' | 'bot' } = { text: this.userInput, sender: 'user' };
    this.messages.unshift(userMessage);

    this.geminiService.generateText(this.userInput).subscribe(response => {
      const botMessage: { text: string, sender: 'user' | 'bot' } = { text: this.limitText(response.generatedText, 4), sender: 'bot' };
      this.messages.unshift(botMessage);
      this.userInput = '';  // Clear user input
      this.errorMessage = '';
    }, error => {
      console.error('Error generating text:', error);
      this.errorMessage = 'An error occurred while generating text. Please try again.';
    });
  }

  private limitText(text: string, maxLines: number): string {
    const lines = text.split('\n').slice(0, maxLines);
    return lines.join('\n');
  }
}
