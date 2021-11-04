import { initialState } from './posts.state';
import { createReducer } from '@ngrx/store';

const _postsReducer = createReducer(initialState);

export function postsReducer(state: any, action: any) {
  return _postsReducer(state, action);
}
