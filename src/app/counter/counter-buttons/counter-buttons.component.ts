import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { decrement, reset } from './../state/counter.actions';

import { Store } from '@ngrx/store';
import { increment } from '../state/counter.actions';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css'],
})
export class CounterButtonsComponent implements OnInit {
  constructor(private store: Store<{ counter: { counter: number } }>) {}

  ngOnInit(): void {}

  OnIncrement = () => {
    this.store.dispatch(increment());
  };

  OnDecrement = () => {
    this.store.dispatch(decrement());
  };

  OnReset = () => {
    this.store.dispatch(reset());
  };
}
