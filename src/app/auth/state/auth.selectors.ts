import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AuthSate } from './auth.state';

export const AUTH_STATE_NAME = 'auth';

const getAuthState = createFeatureSelector<AuthSate>(AUTH_STATE_NAME);

export const isAuthenticated = createSelector(getAuthState, (state) => {
  return state.user ? true : false;
});
