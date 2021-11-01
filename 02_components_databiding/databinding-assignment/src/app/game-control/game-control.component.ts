import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"],
})
export class GameControlComponent implements OnInit {
  @Output() gameStarted = new EventEmitter<{ counter: number }>();
  isActive: boolean = false;
  counter: number = 0;
  intervalRef: any;
  constructor() {}

  ngOnInit(): void {}
  onGameStart() {
    if (!this.isActive) {
      this.intervalRef = setInterval(() => {
        this.gameStarted.emit({ counter: this.counter++ });
      }, 1000);
      this.isActive = true;
    }
  }
  onGameStop() {
    clearInterval(this.intervalRef);
    this.isActive = false;
  }
}
