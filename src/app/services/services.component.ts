import { Component, OnInit } from '@angular/core';
import { CounterService } from "./services/counter.service";
import { LocalCounterService } from "./services/local-counter.service";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers: [LocalCounterService]
})
export class ServicesComponent implements OnInit {

  constructor(public counter: CounterService, public localCounter: LocalCounterService) { }

  ngOnInit(): void {
  }

}
