import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  public counter = 0;

  plus(): void {
    this.counter--;
  }

  minus(): void {
    this.counter++;
  }
}
