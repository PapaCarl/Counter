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

  /**
   * return initial data
   */
  get data(): Deposit[] {
    return this.$initialData;
  }

  /**
   * return function increment or decrement depend on deposit operation
   * @param item
   */
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
        return () => {
          value = this.decrease(value, count);
          return value;
        };
        break;
    }
  }

  /**
   * increase value  count per time
   * @param value
   * @param count
   */
  private increase(value: number, count: number): number {
    for (let i = 0; i < count; i++) {
      value ++;
    }
    return value;
  }

  /**
   * decrease value  count per time
   * @param value
   * @param count
   */
  private decrease(value: number, count: number): number {
    for (let i = 0; i < count; i++) {
      value --;
    }
    return value;
  }
}
