import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  displayDetails: boolean = true;
  counter: number = 1;
  displayLog: any[] = [];
  constructor() {}

  toggleDisplayDetails() {
    this.displayDetails = !this.displayDetails;
    // this.displayLog.push(this.counter++);
    this.displayLog.push(new Date());
  }

  ngOnInit(): void {}
}
