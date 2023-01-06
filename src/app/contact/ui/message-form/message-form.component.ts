import { Component, OnInit } from '@angular/core';
import { Message } from '../../model/Message';

@Component({
  selector: 'message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
