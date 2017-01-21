import { Component } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;

  constructor(private service: CounterService) {
    this.currentCount = service.counter;
  }

  public incrementCounter() {
    this.currentCount = this.service.increment();
  }
}
