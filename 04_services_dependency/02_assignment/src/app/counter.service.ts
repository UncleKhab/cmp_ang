import { Injectable } from "@angular/core";
import { EventEmitter } from "@angular/core";
@Injectable()
export class CounterService {
  counter: number = 0;
  counterUpdated = new EventEmitter<number>();
  onChangeUser() {
    this.counter++;
    this.counterUpdated.emit(this.counter);
  }
}
