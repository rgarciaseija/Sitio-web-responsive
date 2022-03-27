import { MessageService } from './../../services/message.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  message : String = "";
  // subscription : Subscription;

  constructor(private messageService: MessageService) {
    // this.subscription = this.messageService.get().subscribe(message => {
    //   this.message = message;
    // })
  }

  ngOnInit(): void {
    this.messageService.get().subscribe(message => {
      this.message = message;
      console.log(message);

    })
  }
}
