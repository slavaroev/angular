import { Component, OnInit } from '@angular/core';
import { CounterService } from "../services/counter.service";
import { LocalCounterService } from "../services/local-counter.service";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  providers: [LocalCounterService]
})
export class CounterComponent implements OnInit {

  constructor(public counter: CounterService, public localCounter: LocalCounterService) { }

  ngOnInit(): void {
  }

}
