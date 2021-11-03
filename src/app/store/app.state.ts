import { counterReducer } from '../counter/state/counter.reducer';
import { PostsState } from '../posts/state/posts.actions';
import { postsReducer } from '../posts/state/posts.reducer';
import { CounterState } from './../counter/state/counter.state';

export interface AppState {
  counter: CounterState;
  posts: PostsState;
}

export const appReducer = {
  counter: counterReducer,
  posts: postsReducer,
};
