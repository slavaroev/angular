import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  showResult(value: number): void {
    console.log(value);
  }
}
