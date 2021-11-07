import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, mergeMap } from 'rxjs/operators';
import { loadPosts, loadPostsSuccess } from './posts.actions';

import { Injectable } from '@angular/core';
import { PostsService } from './../../services/posts.service';

@Injectable()
export class PostsEffects {
  constructor(private actions$: Actions, private postsService: PostsService) {}

  loadPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadPosts),
      mergeMap((action) => {
        return this.postsService.getPosts().pipe(
          map((posts) => {
            return loadPostsSuccess({ posts });
          })
        );
      })
    );
  });
}
