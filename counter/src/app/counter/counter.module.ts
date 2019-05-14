import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
import { BoardComponent } from './board/board.component';
import {MatButtonModule} from '@angular/material';
import {CounterService} from './counter.service';

@NgModule({
  declarations: [CounterComponent, BoardComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    CounterComponent
  ],
  providers: [
    CounterService
  ]
})
export class CounterModule { }
