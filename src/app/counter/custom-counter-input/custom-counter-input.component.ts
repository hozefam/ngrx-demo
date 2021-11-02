import { Component, OnInit } from '@angular/core';
import { changeName, customIncrement } from './../state/counter.actions';

import { CounterState } from './../state/counter.state';
import { Store } from '@ngrx/store';
import { getName } from './../state/counter.selectors';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css'],
})
export class CustomCounterInputComponent implements OnInit {
  value: number = 0;
  myName: string = '';

  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit(): void {
    this.store.select(getName).subscribe((data) => {
      console.log('Subscribe of myName called');
      this.myName = data;
    });
  }

  onAdd() {
    this.store.dispatch(customIncrement({ value: +this.value }));
  }

  onChangeName() {
    this.store.dispatch(changeName());
  }
}
