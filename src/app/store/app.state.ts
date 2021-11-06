import { AUTH_STATE_NAME } from './../auth/state/auth.selectors';
import { AuthReducer } from '../auth/state/auth.reducer';
import { AuthSate } from './../auth/state/auth.state';
import { SHARED_STATE_NAME } from './Shared/shared.selector';
import { SharedState } from './Shared/shared.state';
import { sharedReducer } from './Shared/shared.reducer';

export interface AppState {
  [SHARED_STATE_NAME]: SharedState;
  [AUTH_STATE_NAME]: AuthSate;
}

export const appReducer = {
  [SHARED_STATE_NAME]: sharedReducer,
  [AUTH_STATE_NAME]: AuthReducer,
};
