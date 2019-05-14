import { Injectable } from '@angular/core';

export interface Deposit {
  value: number;
  count: number;
  operation: string;
}


@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private $initialData: Deposit[] = [
    {
      value: -5,
      count: 1,
      operation: 'increment'
    },
    {
      value: 10,
      count: 2,
      operation: 'decrement'
    }
  ];

  constructor() { }

  get data(): Deposit[] {
    return this.$initialData;
  }

  public changeCount(item: Deposit) {
    let value = item.value;
    const count = item.count;

    switch (item.operation) {
      case 'increment':
        return () => {
          value = this.increase(value, count);
          return value;
        };
        break;
      case 'decrement':
        value = this.decrease(value, count);
        return value;
        break;
    }
  }
  makeCounter() {
    let currentCount = 1;

    return () => {
      return currentCount++;
    };
  }

  private increase(value: number, count: number): number {
    for (let i = 0; i < count; i++) {
      value ++;
    }
    return value;
  }

  private decrease(value: number, count: number): number {
    for (let i = 0; i < count; i++) {
      value --;
    }
    return value;
  }
}
