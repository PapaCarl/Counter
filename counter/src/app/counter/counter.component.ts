import { Component, OnInit } from '@angular/core';
import {CounterService} from './counter.service';
import {interval, Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  private generator: Observable<number> = interval(1000);
  private subscription: Subscription;
  private isActiveGenerator: boolean = false;

  /**
   * array objects from value and function which change the value
   */
  public values: Array<{value: number, changeValue: any}>;

  constructor(
    private counterService: CounterService
  ) { }

  ngOnInit() {
    this.initValues();
  }

  /**
   * initializing start data
   */
  initValues() {
    this.values = this.counterService.data.map(item => {
      const value = item.value;
      const changeValue = this.counterService.changeCount(item);
      return {value, changeValue};
    });
  }

  /**
   * start to dispatch "change" action
   */
  startGenerator() {
    if (!this.isActiveGenerator) {
      this.isActiveGenerator = true;
      this.subscription = this.generator.subscribe(() => {
        this.values.forEach(item => {
          item.value = item.changeValue();
        });
      });
    }
  }

  /**
   * stop to dispatch "change" action
   */
  stopGenerator() {
    this.subscription.unsubscribe();
    this.isActiveGenerator = false;
  }
}
