import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { CounterState } from '../state/counter.state';
import { Store } from '@ngrx/store';
import { getCounter } from './../state/counter.selectors';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent implements OnInit {
  counter: number = 0;

  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit(): void {
    this.store.select(getCounter).subscribe((data) => {
      console.log('Subscribe for counter called');
      this.counter = data;
    });
  }
}
