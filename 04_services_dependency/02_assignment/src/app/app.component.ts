import { Component, OnInit } from "@angular/core";
import { CounterService } from "./counter.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  changesCounter: number;
  constructor(private counterService: CounterService) {
    this.changesCounter = this.counterService.counter;
    this.counterService.counterUpdated.subscribe(
      (counter: number) => (this.changesCounter = counter)
    );
  }
  ngOnInit() {}
}
