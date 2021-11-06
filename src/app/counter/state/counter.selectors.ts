import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CounterState } from './counter.state';

export const COUNTER_STATE = 'counter';

const getCounterState = createFeatureSelector<CounterState>(COUNTER_STATE);

export const getCounter = createSelector(getCounterState, (state) => {
  return state.counter;
});

export const getName = createSelector(getCounterState, (state) => {
  return state.myName;
});
