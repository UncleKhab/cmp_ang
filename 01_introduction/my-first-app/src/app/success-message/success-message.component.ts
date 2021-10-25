import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-message',
  templateUrl: './success-message.component.html',
  styleUrls: ['./success-message.component.css'],
})
export class SuccessMessageComponent {
  message: string = 'This is a success message, congratulations!';
  displayMessage: boolean = true;
  toggleDisplay() {
    this.displayMessage = !this.displayMessage;
  }
}
