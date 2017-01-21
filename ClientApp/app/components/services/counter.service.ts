import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  private _counter: number;

  constructor() {
    this._counter = 0;
  }

  get counter() { return this._counter; }

  increment() {
    this._counter++;
    return this.counter;
  }

}