import { Component, OnInit } from '@angular/core';
import {CounterService} from './counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  value = 0;
  change: any;

  constructor(
    private counterService: CounterService
  ) { }

  ngOnInit() {
    console.log(this.counterService.data);
    this.change = this.counterService.changeCount(this.counterService.data[0]);

  }
  onChange() {
    this.value = this.change();
  }

}
