import {
  addPostSuccess,
  deletePost,
  loadPostsSuccess,
  updatePost,
} from './posts.actions';
import { createReducer, on } from '@ngrx/store';

import { initialState } from './posts.state';

const _postsReducer = createReducer(
  initialState,
  on(addPostSuccess, (state, action) => {
    let post = { ...action.post };
    post.id = (state.posts.length + 1).toString();

    return {
      ...state,
      posts: [...state.posts, post],
    };
  }),
  on(updatePost, (state, action) => {
    return {
      ...state,
      posts: [
        ...state.posts.filter((post) => post.id !== action.post.id),
        action.post,
      ],
    };
  }),
  on(deletePost, (state, action) => {
    return {
      ...state,
      posts: [...state.posts.filter((post) => post.id !== action.id)],
    };
  }),
  on(loadPostsSuccess, (state, action) => {
    console.log(action.posts);
    return {
      ...state,
      posts: action.posts,
    };
  })
);

export function postsReducer(state: any, action: any) {
  return _postsReducer(state, action);
}
