import { Injectable } from '@angular/core';
import { LogService } from "./log.service";

@Injectable()
export class LocalCounterService {
  public counter = 0;

  constructor(public logService: LogService) {
  }

  plus(): void {
    this.counter--;
    this.logService.showResult(this.counter);
  }

  minus(): void {
    this.counter++;
    this.logService.showResult(this.counter);
  }
}
