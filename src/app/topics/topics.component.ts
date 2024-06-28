import { Component } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrl: './topics.component.css'
})
export class TopicsComponent {
username:string | undefined;
constructor(private userservice:UserService){
  this.username=userservice.getUsername();
}
}
